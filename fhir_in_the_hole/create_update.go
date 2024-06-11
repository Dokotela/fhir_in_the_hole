package main

import (
	"encoding/json"
	"fmt"
	"log"
	"reflect"
	"time"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/models"
	"github.com/pocketbase/pocketbase/models/schema"
	"github.com/pocketbase/pocketbase/tools/types"
)

func handleResourceCreation(app *pocketbase.PocketBase, e *core.ModelEvent) error {
	resource, ok := e.Model.(*models.Record)
	if !ok {
		return nil
	}

	collectionName := resource.Collection().Name
	if !isVersionedCollection(app, collectionName) {
		return nil
	}

	resourceField := resource.Get("resource")
	var resourceData []byte
	switch v := resourceField.(type) {
	case types.JsonRaw:
		resourceData = []byte(v)
	default:
		return fmt.Errorf("resource field is not of expected type")
	}

	// Validate the resource data
	if err := validateFHIRResource(resourceData); err != nil {
		return fmt.Errorf("validation error: %w", err)
	}

	resource.Set("versionId", 1)

	switch v := resourceField.(type) {
	case types.JsonRaw:
		var resourceJson map[string]interface{}
		if err := json.Unmarshal(v, &resourceJson); err != nil {
			return fmt.Errorf("failed to unmarshal resource JSON: %w", err)
		}
		updateResourceMeta(resourceJson, 1)
		updatedResourceBytes, err := json.Marshal(resourceJson)
		if err != nil {
			return fmt.Errorf("failed to marshal resource JSON: %w", err)
		}
		resource.Set("resource", types.JsonRaw(updatedResourceBytes))
	case map[string]interface{}:
		resourceJson := v
		updateResourceMeta(resourceJson, 1)
		updatedResourceBytes, err := json.Marshal(resourceJson)
		if err != nil {
			return fmt.Errorf("failed to marshal resource JSON: %w", err)
		}
		resource.Set("resource", updatedResourceBytes)
	default:
		return fmt.Errorf("unexpected type for resource field: %v", reflect.TypeOf(resourceField))
	}

	return nil
}

func handleResourceUpdate(app *pocketbase.PocketBase, e *core.ModelEvent) error {
	resource, ok := e.Model.(*models.Record)
	if !ok {
		log.Printf("resource is not of type Record")
		return nil
	}

	collectionName := resource.Collection().Name
	if !isVersionedCollection(app, collectionName) {
		log.Printf("collection is not versioned")
		return nil
	}

	existingResource, err := app.Dao().FindRecordById(collectionName, resource.Id)
	if err != nil {
		log.Printf("failed to fetch existing resource: %v", err)
		return fmt.Errorf("failed to fetch existing resource: %w", err)
	}

	// Debug statement to check existing resource
	existingResourceJson, _ := json.Marshal(existingResource)
	log.Printf("existingResource before update: %s", string(existingResourceJson))

	// Store the existing resource in the history table
	historyCollectionName := collectionName + "history"
	historyCollection, err := app.Dao().FindCollectionByNameOrId(historyCollectionName)
	if err != nil {
		log.Printf("failed to fetch history collection: %v", err)
		historyCollection = &models.Collection{}
		historyCollection.Name = historyCollectionName
		historyCollection.Type = models.CollectionTypeBase

		schemaFields := existingResource.Collection().Schema.Fields()
		for _, field := range schemaFields {
			historyCollection.Schema.AddField(&schema.SchemaField{
				Name:     field.Name,
				Type:     field.Type,
				Required: field.Required,
				Options:  field.Options,
			})
		}

		if err := app.Dao().SaveCollection(historyCollection); err != nil {
			log.Printf("failed to create history collection: %v", err)
			return fmt.Errorf("failed to create history collection: %w", err)
		}
	}

	historyResource := models.NewRecord(historyCollection)
	existingData := existingResource.SchemaData()
	for key, value := range existingData {
		log.Printf("key: %s, value: %v", key, value)
		historyResource.Set(key, value)
	}

	historyResource.Set("fhirId", existingResource.Get("id"))
	// Debug statement to check history resource before saving
	historyResourceJson, _ := json.Marshal(historyResource)
	log.Printf("historyResource to be saved: %s", string(historyResourceJson))

	if err := app.Dao().SaveRecord(historyResource); err != nil {
		log.Printf("failed to save resource to history table: %v", err)
		return fmt.Errorf("failed to save resource to history table: %w", err)
	}

	resourceField := resource.Get("resource")
	var resourceData []byte
	switch v := resourceField.(type) {
	case types.JsonRaw:
		resourceData = []byte(v)
	default:
		return fmt.Errorf("resource field is not of expected type")
	}

	// Validate the resource data
	if err := validateFHIRResource(resourceData); err != nil {
		log.Printf("validation error: %v", err)
		return fmt.Errorf("validation error: %w", err)
	}

	currentVersionId := existingResource.GetInt("versionId")
	newVersionId := currentVersionId + 1
	resource.Set("versionId", newVersionId)

	log.Printf("updating resource with new versionId: %d", newVersionId)

	switch v := resourceField.(type) {
	case types.JsonRaw:
		var resourceJson map[string]interface{}
		if err := json.Unmarshal(v, &resourceJson); err != nil {
			return fmt.Errorf("failed to unmarshal resource JSON: %w", err)
		}
		updateResourceMeta(resourceJson, newVersionId)
		updatedResourceBytes, err := json.Marshal(resourceJson)
		if err != nil {
			return fmt.Errorf("failed to marshal resource JSON: %w", err)
		}
		resource.Set("resource", types.JsonRaw(updatedResourceBytes))
	case map[string]interface{}:
		resourceJson := v
		updateResourceMeta(resourceJson, newVersionId)
		updatedResourceBytes, err := json.Marshal(resourceJson)
		if err != nil {
			return fmt.Errorf("failed to marshal resource JSON: %w", err)
		}
		resource.Set("resource", updatedResourceBytes)
	default:
		return fmt.Errorf("unexpected type for resource field: %v", reflect.TypeOf(resourceField))
	}

	log.Printf("resource updated successfully with new versionId: %d", newVersionId)

	return nil
}

func updateResourceMeta(resourceJson map[string]interface{}, newVersionId int) {
	if resourceJson["meta"] == nil {
		resourceJson["meta"] = map[string]interface{}{}
	}
	meta := resourceJson["meta"].(map[string]interface{})
	meta["versionId"] = fmt.Sprintf("%d", newVersionId)
	meta["lastUpdated"] = time.Now().Format(time.RFC3339)
}

// isVersionedCollection checks if the collection should have versioning
func isVersionedCollection(app *pocketbase.PocketBase, collectionName string) bool {
	collection, err := app.Dao().FindCollectionByNameOrId(collectionName)
	if err != nil {

		return false
	}

	for _, field := range collection.Schema.Fields() {
		if field.Name == "versionId" {
			return true
		}
	}
	return false
}
