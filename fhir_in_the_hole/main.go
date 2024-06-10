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

	// Setup versioning and history hooks
	SetupHooks(app)

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
