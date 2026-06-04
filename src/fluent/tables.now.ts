import "@servicenow/sdk/global";
import { Table, StringColumn, ChoiceColumn, ReferenceColumn, DateColumn, DecimalColumn } from "@servicenow/sdk/core";

// Application Assets
export const x_1658278_riskview_application = Table({
    name: "x_1658278_riskview_application",
    label: "Application",
    accessible_from: "public",
    actions: ["create", "read", "update", "delete"],
    allow_web_service_access: true,
    display: "name",
    schema: {
        name: StringColumn({
            maxLength: 100,
            label: "Application Name",
            mandatory: true,
        }),
        description: StringColumn({
            maxLength: 500,
            label: "Description",
        }),
        criticality: ChoiceColumn({
            label: "Criticality",
            dropdown: "dropdown_with_none",
            choices: {
                critical: { label: "Critical" },
                high: { label: "High" },
                medium: { label: "Medium" },
                low: { label: "Low" },
            },
        }),
        owner: StringColumn({
            maxLength: 100,
            label: "Owner",
        }),
        business_unit: StringColumn({
            maxLength: 100,
            label: "Business Unit",
        }),
        status: ChoiceColumn({
            label: "Status",
            dropdown: "dropdown_with_none",
            choices: {
                active: { label: "Active" },
                inactive: { label: "Inactive" },
                decommissioned: { label: "Decommissioned" },
            },
        }),
    },
});

// Vulnerabilities
export const x_1658278_riskview_vulnerability = Table({
    name: "x_1658278_riskview_vulnerability",
    label: "Vulnerability",
    accessible_from: "public",
    actions: ["create", "read", "update", "delete"],
    allow_web_service_access: true,
    display: "title",
    schema: {
        title: StringColumn({
            maxLength: 200,
            label: "Title",
            mandatory: true,
        }),
        description: StringColumn({
            maxLength: 1000,
            label: "Description",
        }),
        severity: ChoiceColumn({
            label: "Severity",
            dropdown: "dropdown_with_none",
            choices: {
                critical: { label: "Critical" },
                high: { label: "High" },
                medium: { label: "Medium" },
                low: { label: "Low" },
            },
        }),
        cvss_score: DecimalColumn({
            label: "CVSS Score",
        }),
        status: ChoiceColumn({
            label: "Status",
            dropdown: "dropdown_with_none",
            choices: {
                open: { label: "Open" },
                in_progress: { label: "In Progress" },
                mitigated: { label: "Mitigated" },
                closed: { label: "Closed" },
            },
        }),
        affected_application: ReferenceColumn({
            label: "Affected Application",
            referenceTable: "x_1658278_riskview_application",
        }),
        discovered_date: DateColumn({
            label: "Discovered Date",
        }),
        remediation_date: DateColumn({
            label: "Remediation Date",
        }),
    },
});

// Risk Controls
export const x_1658278_riskview_risk_control = Table({
    name: "x_1658278_riskview_risk_control",
    label: "Risk Control",
    accessible_from: "public",
    actions: ["create", "read", "update", "delete"],
    allow_web_service_access: true,
    display: "name",
    schema: {
        name: StringColumn({
            maxLength: 200,
            label: "Control Name",
            mandatory: true,
        }),
        description: StringColumn({
            maxLength: 500,
            label: "Description",
        }),
        control_type: ChoiceColumn({
            label: "Control Type",
            dropdown: "dropdown_with_none",
            choices: {
                preventive: { label: "Preventive" },
                detective: { label: "Detective" },
                corrective: { label: "Corrective" },
                compensating: { label: "Compensating" },
            },
        }),
        effectiveness: ChoiceColumn({
            label: "Effectiveness",
            dropdown: "dropdown_with_none",
            choices: {
                effective: { label: "Effective" },
                partially_effective: { label: "Partially Effective" },
                ineffective: { label: "Ineffective" },
            },
        }),
        application: ReferenceColumn({
            label: "Application",
            referenceTable: "x_1658278_riskview_application",
        }),
        implementation_status: ChoiceColumn({
            label: "Implementation Status",
            dropdown: "dropdown_with_none",
            choices: {
                implemented: { label: "Implemented" },
                in_progress: { label: "In Progress" },
                planned: { label: "Planned" },
                not_started: { label: "Not Started" },
            },
        }),
    },
});

// Security Incidents
export const x_1658278_riskview_security_incident = Table({
    name: "x_1658278_riskview_security_incident",
    label: "Security Incident",
    accessible_from: "public",
    actions: ["create", "read", "update", "delete"],
    allow_web_service_access: true,
    display: "title",
    schema: {
        title: StringColumn({
            maxLength: 200,
            label: "Incident Title",
            mandatory: true,
        }),
        description: StringColumn({
            maxLength: 1000,
            label: "Description",
        }),
        severity: ChoiceColumn({
            label: "Severity",
            dropdown: "dropdown_with_none",
            choices: {
                critical: { label: "Critical" },
                high: { label: "High" },
                medium: { label: "Medium" },
                low: { label: "Low" },
            },
        }),
        status: ChoiceColumn({
            label: "Status",
            dropdown: "dropdown_with_none",
            choices: {
                new: { label: "New" },
                investigating: { label: "Investigating" },
                contained: { label: "Contained" },
                resolved: { label: "Resolved" },
                closed: { label: "Closed" },
            },
        }),
        affected_application: ReferenceColumn({
            label: "Affected Application",
            referenceTable: "x_1658278_riskview_application",
        }),
        related_vulnerability: ReferenceColumn({
            label: "Related Vulnerability",
            referenceTable: "x_1658278_riskview_vulnerability",
        }),
        reported_date: DateColumn({
            label: "Reported Date",
        }),
        resolved_date: DateColumn({
            label: "Resolved Date",
        }),
    },
});
