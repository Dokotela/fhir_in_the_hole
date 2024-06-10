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

// SetupHooks registers the hooks for the app
func SetupHooks(app *pocketbase.PocketBase) {
	app.OnModelBeforeUpdate().Add(func(e *core.ModelEvent) error {
		return handleResourceUpdate(app, e)
	})
}

func handleResourceUpdate(app *pocketbase.PocketBase, e *core.ModelEvent) error {
	log.Printf("handleResourceUpdate")

	// Check if the model is a resource
	resource, ok := e.Model.(*models.Record)
	if !ok {
		log.Printf("model is not a resource")
		return nil
	}

	log.Printf("resource: %v", resource)

	collectionName := resource.Collection().Name
	if !isVersionedCollection(app, collectionName) {
		log.Printf("collection is not versioned")
		return nil
	}

	log.Printf("collectionName: %s", collectionName)

	// Fetch the current resource from the database
	existingResource, err := app.Dao().FindRecordById(collectionName, resource.Id)
	if err != nil {
		log.Printf("failed to fetch existing resource: %v", err)
		return fmt.Errorf("failed to fetch existing resource: %w", err)
	}

	historyCollectionName := collectionName + "history"

	log.Printf("historyCollectionName: %s", historyCollectionName)

	// Find the history collection
	historyCollection, err := app.Dao().FindCollectionByNameOrId(historyCollectionName)
	if err != nil {
		return fmt.Errorf("failed to find history collection: %w", err)
	}

	// Create a new history record
	historyResource := models.NewRecord(historyCollection)

	existingData := existingResource.SchemaData()

	// Copy all fields from existing resource to the new history record
	for key, value := range existingData {
		historyResource.Set(key, value)
	}

	historyResource.Set("fhirId", historyResource.Get("id"))

	// Save the new history record
	if err := app.Dao().Save(historyResource); err != nil {
		return fmt.Errorf("failed to save resource to history table: %w", err)
	}

	// Increment the versionId
	currentVersionId := existingResource.GetInt("versionId")
	newVersionId := currentVersionId + 1

	// Update the resource being saved with the new versionId
	resource.Set("versionId", newVersionId)

	// Check and log the type of the resource field
	resourceField := resource.Get("resource")

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
		resource.Set("resource", resourceJson)
	default:
		return fmt.Errorf("unexpected type for resource field: %v", reflect.TypeOf(resourceField))
	}

	return nil
}

func updateResourceMeta(resourceJson map[string]interface{}, newVersionId int) {
	if resourceJson["meta"] == nil {
		resourceJson["meta"] = map[string]interface{}{}
	}
	meta := resourceJson["meta"].(map[string]interface{})
	meta["versionId"] = newVersionId
	meta["lastUpdated"] = time.Now().Format(time.RFC3339)
}

// isVersionedCollection checks if the collection should have versioning
func isVersionedCollection(app *pocketbase.PocketBase, collectionName string) bool {
	collection, err := app.Dao().FindCollectionByNameOrId(collectionName)
	if err != nil {
		log.Printf("Error finding collection: %v", err)
		return false
	}

	for _, field := range collection.Schema.Fields() {
		if field.Name == "versionId" {
			return true
		}
	}
	return false
}
