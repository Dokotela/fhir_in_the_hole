package main

import (
	"log"

	"github.com/labstack/echo/v5"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
)

// registerHooks registers any custom hooks for the application.
func registerHooks(app *pocketbase.PocketBase) {
	// Register middleware to log each request
	registerRequestLoggingHook(app)

	// Setup versioning and history hooks
	setupHooks(app)

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

// SetupHooks registers the hooks for the app
func setupHooks(app *pocketbase.PocketBase) {
	app.OnModelBeforeCreate().Add(func(e *core.ModelEvent) error {
		return handleResourceCreation(app, e)
	})

	app.OnModelBeforeUpdate().Add(func(e *core.ModelEvent) error {
		return handleResourceUpdate(app, e)
	})
}
