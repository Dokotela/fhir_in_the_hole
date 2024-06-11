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
	"github.com/pocketbase/pocketbase/tools/types"
)

func handleResourceCreation(app *pocketbase.PocketBase, e *core.ModelEvent) error {
	// Create the resource to be saved
	resource, ok := e.Model.(*models.Record)
	if !ok {
		return nil
	}

	// Should be a ResourceType
	collectionName := resource.Collection().Name
	if !isVersionedCollection(app, collectionName) {
		log.Printf("collection is not versioned")
		return nil
	}

	// Get the resourceField (which is the resource JSON)
	resourceField := resource.Get("resource")
	// Get the resource data - we need for validation
	resourceData, err := getResourceData(resourceField)
	if err != nil {
		log.Printf("failed to get resource data: %v", err)
		return fmt.Errorf("failed to get resource data: %w", err)
	}

	// Validate the resource data
	if err := validateFHIRResource(resourceData); err != nil {
		log.Printf("validation error: %v", err)
		return fmt.Errorf("validation error: %w", err)
	}

	// Update the resource (apply id if none, update versionid and lastUpdated)
	updatedResourceBytes, err := updateResourceJson(resourceData, 0, resource.Id, resource.Updated.Time().UTC().Format(time.RFC3339))
	if err != nil {
		log.Printf("failed to update resource meta: %v", err)
		return fmt.Errorf("failed to update resource meta: %w", err)
	}

	// Set the updated resource back to the record
	resource.Set("resource", types.JsonRaw(updatedResourceBytes))

	return nil
}

func handleResourceUpdate(app *pocketbase.PocketBase, e *core.ModelEvent) error {
	// Create the resource to be saved
	newResourceVersion, ok := e.Model.(*models.Record)
	if !ok {
		return nil
	}

	// Should be a ResourceType
	collectionName := newResourceVersion.Collection().Name
	if !isVersionedCollection(app, collectionName) {
		log.Printf("collection is not versioned")
		return nil
	}

	// Get the resourceField (which is the resource JSON)
	resourceField := newResourceVersion.Get("resource")
	// Get the resource data - we need for validation
	resourceData, err := getResourceData(resourceField)
	if err != nil {
		log.Printf("failed to get resource data: %v", err)
		return fmt.Errorf("failed to get resource data: %w", err)
	}

	// Validate the resource data
	if err := validateFHIRResource(resourceData); err != nil {
		log.Printf("validation error: %v", err)
		return fmt.Errorf("validation error: %w", err)
	}

	// Now move the current resource
	currentResourceVersion, err := app.Dao().FindRecordById(collectionName, newResourceVersion.Id)
	if err != nil {
		log.Printf("failed to fetch existing resource: %v", err)
		return fmt.Errorf("failed to fetch existing resource: %w", err)
	}

	// Store the existing resource in the history table
	historyCollectionName := collectionName + "history"
	historyCollection, err := app.Dao().FindCollectionByNameOrId(historyCollectionName)
	if err != nil {
		log.Printf("failed to create history collection: %v", err)
		return fmt.Errorf("failed to create history collection: %w", err)
	}
	log.Printf("history collection: %s", reflect.TypeOf(historyCollection))

	historicalResourceVersion := models.NewRecord(historyCollection)
	historicalResourceVersion.Set("fhirId", currentResourceVersion.Id)
	historicalResourceVersion.Set("resourceType", currentResourceVersion.Get("resourceType"))
	historicalResourceVersionId := currentResourceVersion.GetInt("versionId")
	historicalResourceVersion.Set("versionId", historicalResourceVersionId)
	historicalResourceVersion.Set("resource", currentResourceVersion.Get("resource"))

	saveErr := app.Dao().SaveRecord(historicalResourceVersion)
	if saveErr != nil {
		log.Printf("failed to save resource to history table: %v", saveErr)
		return fmt.Errorf("failed to save resource to history table: %w", saveErr)
	}
	// Update the resource (apply id if none, update versionid and lastUpdated)
	updatedResourceBytes, err := updateResourceJson(resourceData, historicalResourceVersionId, newResourceVersion.Id, newResourceVersion.Updated.Time().UTC().Format(time.RFC3339))
	if err != nil {
		log.Printf("failed to update resource meta: %v", err)
		return fmt.Errorf("failed to update resource meta: %w", err)
	}

	// Set the updated resource back to the record
	newResourceVersion.Set("resource", types.JsonRaw(updatedResourceBytes))
	newResourceVersion.Set("versionId", currentResourceVersion.GetInt("versionId"))

	return nil
}

func updateResourceJson(resourceData []byte, newVersionId int, id string, lastUpdated string) (updatedResourceBytes []byte, err error) {
	// Parse the resource JSON
	var resourceJson map[string]interface{}
	if err := json.Unmarshal(resourceData, &resourceJson); err != nil {
		return nil, fmt.Errorf("failed to unmarshal resource JSON: %w", err)
	}

	if resourceJson["id"] == nil {
		resourceJson["id"] = id
	}

	if resourceJson["meta"] == nil {
		resourceJson["meta"] = map[string]interface{}{}
	}
	meta := resourceJson["meta"].(map[string]interface{})
	meta["versionId"] = fmt.Sprintf("%d", newVersionId)
	log.Printf("Last Updated: %s", lastUpdated)
	meta["lastUpdated"] = lastUpdated
	// Marshal the updated resource back to JSON
	return json.Marshal(resourceJson)
}

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

func getResourceData(resourceField any) (resourceData []byte, err error) {
	switch v := resourceField.(type) {
	case types.JsonRaw:
		resourceData = []byte(v)
	default:
		return nil, fmt.Errorf("resource field is not of expected type")
	}
	return resourceData, nil
}
