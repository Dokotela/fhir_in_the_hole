package main

import (
	"fmt"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/models"
)

// SetupHooks registers the hooks for the app
func SetupHooks(app *pocketbase.PocketBase) {
	app.OnModelBeforeUpdate().Add(func(e *core.ModelEvent) error {
		return handleResourceUpdate(app, e)
	})
}

// handleResourceUpdate handles the versioning and history management for resources
func handleResourceUpdate(app *pocketbase.PocketBase, e *core.ModelEvent) error {
	// Check if the model is a resource
	resource, ok := e.Model.(*models.Record)
	if !ok {
		return nil
	}

	collectionName := resource.Collection().Name
	if !isVersionedCollection(collectionName) {
		return nil
	}

	// Get the history collection
	historyCollectionName := collectionName + "History"
	historyCollection, err := app.Dao().FindCollectionByNameOrId(historyCollectionName)
	if err != nil {
		return fmt.Errorf("failed to find history collection: %w", err)
	}

	// Copy the existing version to the history collection
	historyRecord := models.NewRecord(historyCollection)
	historyRecord.Set("versionId", resource.GetInt("versionId"))
	historyRecord.Set("resource", resource.Get("resource"))

	if err := app.Dao().SaveRecord(historyRecord); err != nil {
		return fmt.Errorf("failed to save history record: %w", err)
	}

	// Increment the versionId
	resource.Set("versionId", resource.GetInt("versionId")+1)

	return nil
}

// isVersionedCollection checks if the collection should have versioning
func isVersionedCollection(collectionName string) bool {
	versionedCollections := []string{
		"Account", "ActivityDefinition", "AdverseEvent", "AllergyIntolerance",
		// add other collections here
	}
	for _, name := range versionedCollections {
		if name == collectionName {
			return true
		}
	}
	return false
}
