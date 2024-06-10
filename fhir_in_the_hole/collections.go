// collections.go
package main

var Collections = []map[string]interface{}{
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
