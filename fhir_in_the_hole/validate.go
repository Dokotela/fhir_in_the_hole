package main

import (
	"fmt"

	"github.com/google/fhir/go/fhirversion"
	"github.com/google/fhir/go/jsonformat"
	"github.com/google/fhir/go/jsonformat/fhirvalidate"
)

// validateFHIRResource validates a FHIR resource JSON
func validateFHIRResource(resourceJson []byte) error {

	// Create a FHIR JSON unmarshaller
	unmarshaller, err := jsonformat.NewUnmarshaller("UTC", fhirversion.R4)
	if err != nil {
		return fmt.Errorf("failed to create unmarshaller: %w", err)
	}

	msg, err := unmarshaller.Unmarshal(resourceJson)
	// Unmarshal the JSON into the proto message
	if err != nil {
		return fmt.Errorf("failed to unmarshal FHIR resource: %w", err)
	}

	// Validate the resource using fhirvalidate package
	if err := fhirvalidate.Validate(msg); err != nil {
		return fmt.Errorf("FHIR resource validation failed: %w", err)
	}

	return nil
}
