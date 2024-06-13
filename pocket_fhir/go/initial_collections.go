package main

import (
	"fmt"
	"log"
	"strings"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/forms"
	"github.com/pocketbase/pocketbase/models"
	"github.com/pocketbase/pocketbase/models/schema"
	"github.com/pocketbase/pocketbase/tools/types"
)

func initializeCollections(app *pocketbase.PocketBase) {
	// Create initial collections on BeforeServe event
	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		createInitialCollections(app)
		return nil
	})
}

func createInitialCollections(app *pocketbase.PocketBase) {
	db := app.Dao().DB()

	if collections == nil {

		return
	}

	for _, collection := range collections {
		collectionName, ok := collection["name"].(string)
		if !ok {

			continue
		}

		// Convert the collection name to lowercase
		collectionName = strings.ToLower(collectionName)

		existingCollection, err := app.Dao().FindCollectionByNameOrId(collectionName)
		if err == nil && existingCollection != nil {

			continue
		}

		schemaFields, ok := collection["schema"].([]map[string]interface{})
		if !ok {

			continue
		}

		var indexes []map[string]interface{}
		if v, ok := collection["indexes"]; ok {
			indexes, ok = v.([]map[string]interface{})
			if !ok {

				continue
			}
		}

		coll := &models.Collection{}
		form := forms.NewCollectionUpsert(app, coll)
		form.Name = collectionName
		form.Type = models.CollectionTypeBase
		form.ListRule = nil
		form.ViewRule = types.Pointer("@request.auth.id != ''")
		form.CreateRule = types.Pointer("")
		form.UpdateRule = types.Pointer("@request.auth.id != ''")
		form.DeleteRule = nil

		for _, field := range schemaFields {
			fieldName, ok := field["name"].(string)
			if !ok {

				continue
			}

			fieldType, ok := field["type"].(string)
			if !ok {

				continue
			}

			fieldOptions, ok := field["options"].(map[string]interface{})
			if !ok {
				fieldOptions = map[string]interface{}{}
			}

			form.Schema.AddField(&schema.SchemaField{
				Name:     fieldName,
				Type:     fieldType,
				Required: true,
				Options:  fieldOptions,
			})
		}

		if err := form.Submit(); err != nil {

			continue
		}

		for _, index := range indexes {
			indexName, ok := index["name"].(string)
			if !ok {

				continue
			}

			indexType, ok := index["type"].(string)
			if !ok {

				continue
			}

			fields, ok := index["fields"].([]string)
			if !ok {

				continue
			}

			fieldsStr := strings.Join(fields, ", ")
			query := fmt.Sprintf("CREATE %s INDEX %s ON %s (%s);", indexType, indexName, collectionName, fieldsStr)
			if _, err := db.NewQuery(query).Execute(); err != nil {
				log.Printf("Failed to create index '%s' on collection '%s': %v", indexName, collectionName, err)
			} else {
				log.Printf("Index '%s' created successfully on collection '%s'", indexName, collectionName)
			}
		}

		log.Printf("Collection '%s' created successfully", collectionName)
	}
}
