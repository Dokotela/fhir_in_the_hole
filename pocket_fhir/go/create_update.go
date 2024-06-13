package main

import (
	"encoding/json"
	"fmt"
	"strings"
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

	// If this is a historical record, we don't need to update anything since we're
	// just copying it over
	collectionName := resource.Collection().Name
	if strings.HasSuffix(collectionName, "history") {
		return nil
	}

	// Check if the collection is versioned, if not, we're done
	if !isVersionedCollection(app, collectionName) {
		return nil
	}

	// Get the resourceField (which is the resource JSON)
	resourceField := resource.Get("resource")

	// Get the resource data - we need for validation
	resourceData, err := getResourceData(resourceField)
	if err != nil {
		return fmt.Errorf("failed to get resource data: %w", err)
	}

	// Validate the resource data
	if err := validateFHIRResource(resourceData); err != nil {
		return fmt.Errorf("validation error: %w", err)
	}

	// Update the resource (apply id if none, update versionid and lastUpdated)
	updatedResourceBytes, err := updateResourceJson(resourceData, 0, resource.Id, resource.Updated.Time().UTC().Format(time.RFC3339))
	if err != nil {
		return fmt.Errorf("failed to update resource meta: %w", err)
	}

	// Set the updated resource back to the record
	resource.Set("resource", types.JsonRaw(updatedResourceBytes))

	// Again, since this is the creation, the versionId is 0
	resource.Set("versionId", 0)

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
		return nil
	}

	// Get the resourceField (which is the resource JSON)
	resourceField := newResourceVersion.Get("resource")

	// Get the resource data - we need for validation
	resourceData, err := getResourceData(resourceField)
	if err != nil {
		return fmt.Errorf("failed to get resource data: %w", err)
	}

	// Validate the resource data
	if err := validateFHIRResource(resourceData); err != nil {
		return fmt.Errorf("validation error: %w", err)
	}

	// Now move the current resource - remember, this will end up calling
	// handleResourceCreation eventually - which can cause issues if you're unaware
	currentResourceVersion, err := app.Dao().FindRecordById(collectionName, newResourceVersion.Id)
	if err != nil {
		return fmt.Errorf("failed to fetch existing resource: %w", err)
	}

	// Get the history table for this resource
	historyCollectionName := collectionName + "history"
	historyCollection, err := app.Dao().FindCollectionByNameOrId(historyCollectionName)
	if err != nil {
		return fmt.Errorf("failed to create history collection: %w", err)
	}

	// Create a new record in the history table
	historicalResourceVersion := models.NewRecord(historyCollection)

	// Copy over the values
	historicalResourceVersion.Set("fhirId", currentResourceVersion.Id)
	historicalResourceVersion.Set("resourceType", currentResourceVersion.Get("resourceType"))
	historicalResourceVersionId := currentResourceVersion.GetInt("versionId")
	updatedVersionId := historicalResourceVersionId + 1
	historicalResourceVersion.Set("versionId", historicalResourceVersionId)
	historicalResourceVersion.Set("resource", currentResourceVersion.Get("resource"))

	// Finish saving the old version of the record
	saveErr := app.Dao().SaveRecord(historicalResourceVersion)
	if saveErr != nil {
		return fmt.Errorf("failed to save resource to history table: %w", saveErr)
	}

	// Update the resource (apply id if none, update versionId and lastUpdated)
	updatedResourceBytes, err := updateResourceJson(resourceData, updatedVersionId, newResourceVersion.Id, newResourceVersion.Updated.Time().UTC().Format(time.RFC3339))
	if err != nil {
		return fmt.Errorf("failed to update resource meta: %w", err)
	}

	// Set the updated resource back to the record
	newResourceVersion.Set("resource", types.JsonRaw(updatedResourceBytes))

	// Be sure to update the versionId in the table, not just the JSON
	newResourceVersion.Set("versionId", updatedVersionId)

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
	meta["lastUpdated"] = lastUpdated
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
