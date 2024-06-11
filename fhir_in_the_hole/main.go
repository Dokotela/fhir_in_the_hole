package main

import (
	"log"

	"github.com/pocketbase/pocketbase"
)

func main() {
	app := pocketbase.New()

	// Standard setup for app
	standard(app)

	// Register hooks from hooks.go
	registerHooks(app)

	initializeCollections(app)

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
