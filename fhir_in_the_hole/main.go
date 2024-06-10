package main

import (
	"fmt"
	"log"
	"os"
	"path/filepath"
	"strings"
	"time"

	"github.com/labstack/echo/v5"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/forms"
	"github.com/pocketbase/pocketbase/models"
	"github.com/pocketbase/pocketbase/models/schema"
	"github.com/pocketbase/pocketbase/plugins/ghupdate"
	"github.com/pocketbase/pocketbase/plugins/jsvm"
	"github.com/pocketbase/pocketbase/plugins/migratecmd"
	"github.com/pocketbase/pocketbase/tools/types"
)

func main() {
	app := pocketbase.New()

	// ---------------------------------------------------------------
	// Optional plugin flags:
	// ---------------------------------------------------------------

	var hooksDir string
	app.RootCmd.PersistentFlags().StringVar(
		&hooksDir,
		"hooksDir",
		"./hooks", // default directory for hooks
		"the directory with the JS app hooks",
	)

	var hooksWatch bool
	app.RootCmd.PersistentFlags().BoolVar(
		&hooksWatch,
		"hooksWatch",
		true, // default to true
		"auto restart the app on pb_hooks file change",
	)

	var hooksPool int
	app.RootCmd.PersistentFlags().IntVar(
		&hooksPool,
		"hooksPool",
		25, // default pool size
		"the total prewarm goja.Runtime instances for the JS app hooks execution",
	)

	var migrationsDir string
	app.RootCmd.PersistentFlags().StringVar(
		&migrationsDir,
		"migrationsDir",
		"./migrations", // default directory for migrations
		"the directory with the user defined migrations",
	)

	var automigrate bool
	app.RootCmd.PersistentFlags().BoolVar(
		&automigrate,
		"automigrate",
		true,
		"enable/disable auto migrations",
	)

	var publicDir string
	app.RootCmd.PersistentFlags().StringVar(
		&publicDir,
		"publicDir",
		defaultPublicDir(),
		"the directory to serve static files",
	)

	var indexFallback bool
	app.RootCmd.PersistentFlags().BoolVar(
		&indexFallback,
		"indexFallback",
		true,
		"fallback the request to index.html on missing static path (eg. when pretty urls are used with SPA)",
	)

	var queryTimeout int
	app.RootCmd.PersistentFlags().IntVar(
		&queryTimeout,
		"queryTimeout",
		30,
		"the default SELECT queries timeout in seconds",
	)

	app.RootCmd.ParseFlags(os.Args[1:])

	// ---------------------------------------------------------------
	// Plugins and hooks:
	// ---------------------------------------------------------------

	// load jsvm (hooks and migrations)
	jsvm.MustRegister(app, jsvm.Config{
		MigrationsDir: migrationsDir,
		HooksDir:      hooksDir,
		HooksWatch:    hooksWatch,
		HooksPoolSize: hooksPool,
	})

	// migrate command (with js templates)
	migratecmd.MustRegister(app, app.RootCmd, migratecmd.Config{
		TemplateLang: migratecmd.TemplateLangJS,
		Automigrate:  automigrate,
		Dir:          migrationsDir,
	})

	// GitHub selfupdate
	ghupdate.MustRegister(app, app.RootCmd, ghupdate.Config{})

	app.OnAfterBootstrap().PreAdd(func(e *core.BootstrapEvent) error {
		app.Dao().ModelQueryTimeout = time.Duration(queryTimeout) * time.Second
		return nil
	})

	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		// serves static files from the provided public dir (if exists)
		e.Router.GET("/*", apis.StaticDirectoryHandler(os.DirFS(publicDir), indexFallback))
		return nil
	})

	// Register hooks from hooks.go
	registerHooks(app)

	// Create initial collections on BeforeServe event
	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		createInitialCollections(app)
		return nil
	})

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}

// registerHooks registers any custom hooks for the application.
func registerHooks(app *pocketbase.PocketBase) {
	// Register middleware to log each request
	registerRequestLoggingHook(app)

	// Add more hooks as needed
}

// registerRequestLoggingHook logs each request to the server
func registerRequestLoggingHook(app *pocketbase.PocketBase) {
	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		e.Router.Use(func(next echo.HandlerFunc) echo.HandlerFunc {
			return func(c echo.Context) error {
				log.Printf("Request: %s %s", c.Request().Method, c.Request().URL.Path)
				return next(c)
			}
		})
		return nil
	})
}

// the default pb_public dir location is relative to the executable
func defaultPublicDir() string {
	if strings.HasPrefix(os.Args[0], os.TempDir()) {
		// most likely ran with go run
		return "./pb_public"
	}

	return filepath.Join(os.Args[0], "../pb_public")
}

func createInitialCollections(app *pocketbase.PocketBase) {
	db := app.Dao().DB()

	if collections == nil {
		log.Println("No collections to create")
		return
	}

	for i, collection := range collections {
		collectionName, ok := collection["name"].(string)
		if !ok {
			log.Printf("Invalid or missing collection name for collection %d", i)
			continue
		}

		// Convert the collection name to lowercase
		collectionName = strings.ToLower(collectionName)

		existingCollection, err := app.Dao().FindCollectionByNameOrId(collectionName)
		if err == nil && existingCollection != nil {
			log.Printf("Collection '%s' already exists", collectionName)
			continue
		}

		schemaFields, ok := collection["schema"].([]map[string]interface{})
		if !ok {
			log.Printf("Invalid or missing schema for collection '%s'", collectionName)
			continue
		}

		var indexes []map[string]interface{}
		if v, ok := collection["indexes"]; ok {
			indexes, ok = v.([]map[string]interface{})
			if !ok {
				log.Printf("Invalid indexes for collection '%s'", collectionName)
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
				log.Printf("Invalid or missing field name in collection '%s'", collectionName)
				continue
			}

			fieldType, ok := field["type"].(string)
			if !ok {
				log.Printf("Invalid or missing field type for field '%s' in collection '%s'", fieldName, collectionName)
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
			log.Printf("Failed to create collection '%s': %v", collectionName, err)
			continue
		}

		for _, index := range indexes {
			indexName, ok := index["name"].(string)
			if !ok {
				log.Printf("Invalid or missing index name for collection '%s'", collectionName)
				continue
			}

			indexType, ok := index["type"].(string)
			if !ok {
				log.Printf("Invalid or missing index type for collection '%s'", collectionName)
				continue
			}

			fields, ok := index["fields"].([]string)
			if !ok {
				log.Printf("Invalid or missing index fields for collection '%s'", collectionName)
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

var collections = []map[string]interface{}{
	{
		"name": "Account",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "AccountHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "ActivityDefinition",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ActivityDefinitionHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "AdministrableProductDefinition",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "AdministrableProductDefinitionHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "AdverseEvent",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "AdverseEventHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "AllergyIntolerance",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "AllergyIntoleranceHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Appointment",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "AppointmentHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "AppointmentResponse",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "AppointmentResponseHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "AuditEvent",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "AuditEventHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Basic",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "BasicHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Binary",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "BinaryHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "BiologicallyDerivedProduct",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "BiologicallyDerivedProductHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "BodyStructure",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "BodyStructureHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Bundle",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "BundleHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "CapabilityStatement",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "CapabilityStatementHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "CarePlan",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "CarePlanHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "CareTeam",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "CareTeamHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "CatalogEntry",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "CatalogEntryHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "ChargeItem",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ChargeItemHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "ChargeItemDefinition",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ChargeItemDefinitionHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Citation",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "CitationHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Claim",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ClaimHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "ClaimResponse",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ClaimResponseHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "ClinicalImpression",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ClinicalImpressionHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "ClinicalUseDefinition",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ClinicalUseDefinitionHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "CodeSystem",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "CodeSystemHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Communication",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "CommunicationHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "CommunicationRequest",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "CommunicationRequestHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "CompartmentDefinition",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "CompartmentDefinitionHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Composition",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "CompositionHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "ConceptMap",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ConceptMapHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Condition",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ConditionHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Consent",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ConsentHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Contract",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ContractHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Coverage",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "CoverageHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "CoverageEligibilityRequest",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "CoverageEligibilityRequestHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "CoverageEligibilityResponse",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "CoverageEligibilityResponseHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "DetectedIssue",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "DetectedIssueHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Device",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "DeviceHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "DeviceDefinition",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "DeviceDefinitionHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "DeviceMetric",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "DeviceMetricHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "DeviceRequest",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "DeviceRequestHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "DeviceUseStatement",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "DeviceUseStatementHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "DiagnosticReport",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "DiagnosticReportHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "DocumentManifest",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "DocumentManifestHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "DocumentReference",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "DocumentReferenceHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Encounter",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "EncounterHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Endpoint",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "EndpointHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "EnrollmentRequest",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "EnrollmentRequestHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "EnrollmentResponse",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "EnrollmentResponseHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "EpisodeOfCare",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "EpisodeOfCareHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "EventDefinition",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "EventDefinitionHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Evidence",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "EvidenceHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "EvidenceReport",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "EvidenceReportHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "EvidenceVariable",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "EvidenceVariableHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "ExampleScenario",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ExampleScenarioHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "ExplanationOfBenefit",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ExplanationOfBenefitHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "FamilyMemberHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "FamilyMemberHistoryHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Flag",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "FlagHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Goal",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "GoalHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "GraphDefinition",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "GraphDefinitionHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Group",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "GroupHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "GuidanceResponse",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "GuidanceResponseHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "HealthcareService",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "HealthcareServiceHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "ImagingStudy",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ImagingStudyHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Immunization",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ImmunizationHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "ImmunizationEvaluation",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ImmunizationEvaluationHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "ImmunizationRecommendation",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ImmunizationRecommendationHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "ImplementationGuide",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ImplementationGuideHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Ingredient",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "IngredientHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "InsurancePlan",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "InsurancePlanHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Invoice",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "InvoiceHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Library",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "LibraryHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Linkage",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "LinkageHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "List",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ListHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Location",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "LocationHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "ManufacturedItemDefinition",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ManufacturedItemDefinitionHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Measure",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "MeasureHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "MeasureReport",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "MeasureReportHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Media",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "MediaHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Medication",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "MedicationHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "MedicationAdministration",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "MedicationAdministrationHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "MedicationDispense",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "MedicationDispenseHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "MedicationKnowledge",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "MedicationKnowledgeHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "MedicationRequest",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "MedicationRequestHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "MedicationStatement",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "MedicationStatementHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "MedicinalProductDefinition",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "MedicinalProductDefinitionHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "MessageDefinition",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "MessageDefinitionHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "MessageHeader",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "MessageHeaderHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "MolecularSequence",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "MolecularSequenceHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "NamingSystem",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "NamingSystemHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "NutritionOrder",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "NutritionOrderHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "NutritionProduct",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "NutritionProductHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Observation",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ObservationHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "ObservationDefinition",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ObservationDefinitionHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "OperationDefinition",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "OperationDefinitionHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "OperationOutcome",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "OperationOutcomeHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Organization",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "OrganizationHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "OrganizationAffiliation",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "OrganizationAffiliationHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "PackagedProductDefinition",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "PackagedProductDefinitionHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Parameters",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ParametersHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Patient",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "PatientHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "PaymentNotice",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "PaymentNoticeHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "PaymentReconciliation",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "PaymentReconciliationHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Person",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "PersonHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "PlanDefinition",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "PlanDefinitionHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Practitioner",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "PractitionerHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "PractitionerRole",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "PractitionerRoleHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Procedure",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ProcedureHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Provenance",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ProvenanceHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Questionnaire",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "QuestionnaireHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "QuestionnaireResponse",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "QuestionnaireResponseHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "RegulatedAuthorization",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "RegulatedAuthorizationHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "RelatedPerson",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "RelatedPersonHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "RequestGroup",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "RequestGroupHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "ResearchDefinition",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ResearchDefinitionHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "ResearchElementDefinition",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ResearchElementDefinitionHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "ResearchStudy",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ResearchStudyHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "ResearchSubject",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ResearchSubjectHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "RiskAssessment",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "RiskAssessmentHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Schedule",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ScheduleHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "SearchParameter",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "SearchParameterHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "ServiceRequest",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ServiceRequestHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Slot",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "SlotHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Specimen",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "SpecimenHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "SpecimenDefinition",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "SpecimenDefinitionHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "StructureDefinition",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "StructureDefinitionHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "StructureMap",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "StructureMapHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Subscription",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "SubscriptionHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "SubscriptionStatus",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "SubscriptionStatusHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "SubscriptionTopic",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "SubscriptionTopicHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Substance",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "SubstanceHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "SubstanceDefinition",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "SubstanceDefinitionHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "SupplyDelivery",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "SupplyDeliveryHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "SupplyRequest",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "SupplyRequestHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "Task",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "TaskHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "TerminologyCapabilities",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "TerminologyCapabilitiesHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "TestReport",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "TestReportHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "TestScript",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "TestScriptHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "ValueSet",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "ValueSetHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "VerificationResult",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "VerificationResultHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	}, {
		"name": "VisionPrescription",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
	},
	{
		"name": "VisionPrescriptionHistory",
		"schema": []map[string]interface{}{
			{"name": "versionId", "type": "number"},
			{"name": "resource", "type": "json", "options": map[string]interface{}{"maxSize": 5242880}},
		},
		"indexes": []map[string]interface{}{
			{"name": "unique_id_version", "type": "unique", "fields": []string{"id", "versionId"}},
		},
	},
}
