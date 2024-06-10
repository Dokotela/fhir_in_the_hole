package main

import (
	"fmt"
	"log"

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
	log.Printf("VERSIONID: %d", resource.GetInt("versionId"))

	historyRecord.Set("resource", resource.Get("resource"))

	if err := app.Dao().SaveRecord(historyRecord); err != nil {
		return fmt.Errorf("failed to save history record: %w", err)
	}

	// Increment the versionId
	resource.Set("versionId", resource.GetInt("versionId")+1)
	log.Printf("UPDATEDVERSIONID: %d", resource.GetInt("versionId")+1)

	return nil
}

// isVersionedCollection checks if the collection should have versioning
func isVersionedCollection(collectionName string) bool {
	for _, name := range versionedCollections {
		if name == collectionName {
			return true
		}
	}
	return false
}

var versionedCollections = []string{
	"Account",
	"ActivityDefinition",
	"AdministrableProductDefinition",
	"AdverseEvent",
	"AllergyIntolerance",
	"Appointment",
	"AppointmentResponse",
	"AuditEvent",
	"Basic",
	"Binary",
	"BiologicallyDerivedProduct",
	"BodyStructure",
	"Bundle",
	"CapabilityStatement",
	"CarePlan",
	"CareTeam",
	"CatalogEntry",
	"ChargeItem",
	"ChargeItemDefinition",
	"Citation",
	"Claim",
	"ClaimResponse",
	"ClinicalImpression",
	"ClinicalUseDefinition",
	"CodeSystem",
	"Communication",
	"CommunicationRequest",
	"CompartmentDefinition",
	"Composition",
	"ConceptMap",
	"Condition",
	"Consent",
	"Contract",
	"Coverage",
	"CoverageEligibilityRequest",
	"CoverageEligibilityResponse",
	"DetectedIssue",
	"Device",
	"DeviceDefinition",
	"DeviceMetric",
	"DeviceRequest",
	"DeviceUseStatement",
	"DiagnosticReport",
	"DocumentManifest",
	"DocumentReference",
	"Encounter",
	"Endpoint",
	"EnrollmentRequest",
	"EnrollmentResponse",
	"EpisodeOfCare",
	"EventDefinition",
	"Evidence",
	"EvidenceReport",
	"EvidenceVariable",
	"ExampleScenario",
	"ExplanationOfBenefit",
	"Flag",
	"Goal",
	"GraphDefinition",
	"Group",
	"GuidanceResponse",
	"HealthcareService",
	"ImagingStudy",
	"Immunization",
	"ImmunizationEvaluation",
	"ImmunizationRecommendation",
	"ImplementationGuide",
	"Ingredient",
	"InsurancePlan",
	"Invoice",
	"Library",
	"Linkage",
	"List",
	"Location",
	"ManufacturedItemDefinition",
	"Measure",
	"MeasureReport",
	"Media",
	"Medication",
	"MedicationAdministration",
	"MedicationDispense",
	"MedicationKnowledge",
	"MedicationRequest",
	"MedicationStatement",
	"MedicinalProductDefinition",
	"MessageDefinition",
	"MessageHeader",
	"MolecularSequence",
	"NamingSystem",
	"NutritionOrder",
	"NutritionProduct",
	"Observation",
	"ObservationDefinition",
	"OperationDefinition",
	"OperationOutcome",
	"Organization",
	"OrganizationAffiliation",
	"PackagedProductDefinition",
	"Parameters",
	"Patient",
	"PaymentNotice",
	"PaymentReconciliation",
	"Person",
	"PlanDefinition",
	"Practitioner",
	"PractitionerRole",
	"Procedure",
	"Provenance",
	"Questionnaire",
	"QuestionnaireResponse",
	"RegulatedAuthorization",
	"RelatedPerson",
	"RequestGroup",
	"ResearchDefinition",
	"ResearchElementDefinition",
	"ResearchStudy",
	"ResearchSubject",
	"RiskAssessment",
	"Schedule",
	"SearchParameter",
	"ServiceRequest",
	"Slot",
	"Specimen",
	"SpecimenDefinition",
	"StructureDefinition",
	"StructureMap",
	"Subscription",
	"SubscriptionStatus",
	"SubscriptionTopic",
	"Substance",
	"SubstanceDefinition",
	"SupplyDelivery",
	"SupplyRequest",
	"Task",
	"TerminologyCapabilities",
	"TestReport",
	"TestScript",
	"ValueSet",
	"VerificationResult",
	"VisionPrescription",
}
