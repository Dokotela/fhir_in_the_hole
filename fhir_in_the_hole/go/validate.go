package main

import (
	"fmt"

	"github.com/google/fhir/go/fhirversion"
	"github.com/google/fhir/go/jsonformat"
	"github.com/google/fhir/go/jsonformat/fhirvalidate"
	"google.golang.org/protobuf/encoding/protojson"
)

// validateFHIRResource validates a FHIR resource JSON
func validateFHIRResource(resourceData []byte) error {

	// Create a FHIR JSON unmarshaller
	unmarshaller, err := jsonformat.NewUnmarshaller("UTC", fhirversion.R4)
	if err != nil {
		return fmt.Errorf("failed to create unmarshaller: %w", err)
	}

	// Unmarshal the JSON into the proto message
	msg, err := unmarshaller.Unmarshal(resourceData)
	if err != nil {
		// Attempt to convert the partial/invalid message to JSON string
		jsonString, protoErr := protojson.Marshal(msg)
		if protoErr != nil {
			return fmt.Errorf("failed to unmarshal FHIR resource: %w\nAdditionally, failed to convert proto message to JSON string: %w", err, protoErr)
		}
		return fmt.Errorf("failed to unmarshal FHIR resource: %w\nPartial proto message JSON: %s", err, jsonString)
	}

	// Validate the resource using fhirvalidate package
	if err := fhirvalidate.Validate(msg); err != nil {
		return fmt.Errorf("FHIR resource validation failed: %w", err)
	}

	return nil
}
