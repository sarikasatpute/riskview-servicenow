import "@servicenow/sdk/global";
import { Record } from "@servicenow/sdk/core";

// =====================
// Application Records
// =====================

export const app1 = Record({
    $id: Now.ID["app-1"],
    table: "x_1658278_riskview_application",
    data: {
        name: "SAP ERP",
        criticality: "critical",
        business_unit: "Finance",
        owner: "John Smith",
        status: "active",
    },
});

export const app2 = Record({
    $id: Now.ID["app-2"],
    table: "x_1658278_riskview_application",
    data: {
        name: "Salesforce CRM",
        criticality: "high",
        business_unit: "Sales",
        owner: "Jane Doe",
        status: "active",
    },
});

export const app3 = Record({
    $id: Now.ID["app-3"],
    table: "x_1658278_riskview_application",
    data: {
        name: "Jenkins CI/CD",
        criticality: "high",
        business_unit: "Engineering",
        owner: "Mike Johnson",
        status: "active",
    },
});

export const app4 = Record({
    $id: Now.ID["app-4"],
    table: "x_1658278_riskview_application",
    data: {
        name: "Office 365",
        criticality: "medium",
        business_unit: "Corporate",
        owner: "Sarah Wilson",
        status: "active",
    },
});

export const app5 = Record({
    $id: Now.ID["app-5"],
    table: "x_1658278_riskview_application",
    data: {
        name: "Legacy Portal",
        criticality: "low",
        business_unit: "Operations",
        owner: "Tom Brown",
        status: "inactive",
    },
});

// =====================
// Vulnerability Records
// =====================

export const vuln1 = Record({
    $id: Now.ID["vuln-1"],
    table: "x_1658278_riskview_vulnerability",
    data: {
        title: "SQL Injection in Login Form",
        severity: "critical",
        cvss_score: 9.8,
        status: "open",
        affected_application: Now.ID["app-1"],
        discovered_date: "2024-01-10",
    },
});

export const vuln2 = Record({
    $id: Now.ID["vuln-2"],
    table: "x_1658278_riskview_vulnerability",
    data: {
        title: "Cross-Site Scripting (XSS)",
        severity: "high",
        cvss_score: 7.5,
        status: "in_progress",
        affected_application: Now.ID["app-2"],
        discovered_date: "2024-01-15",
    },
});

export const vuln3 = Record({
    $id: Now.ID["vuln-3"],
    table: "x_1658278_riskview_vulnerability",
    data: {
        title: "Outdated TLS 1.0",
        severity: "medium",
        cvss_score: 5.3,
        status: "mitigated",
        affected_application: Now.ID["app-5"],
        discovered_date: "2024-02-01",
    },
});

export const vuln4 = Record({
    $id: Now.ID["vuln-4"],
    table: "x_1658278_riskview_vulnerability",
    data: {
        title: "Remote Code Execution",
        severity: "critical",
        cvss_score: 9.9,
        status: "open",
        affected_application: Now.ID["app-3"],
        discovered_date: "2024-02-10",
    },
});

export const vuln5 = Record({
    $id: Now.ID["vuln-5"],
    table: "x_1658278_riskview_vulnerability",
    data: {
        title: "Privilege Escalation",
        severity: "high",
        cvss_score: 8.1,
        status: "in_progress",
        affected_application: Now.ID["app-1"],
        discovered_date: "2024-02-20",
    },
});

export const vuln6 = Record({
    $id: Now.ID["vuln-6"],
    table: "x_1658278_riskview_vulnerability",
    data: {
        title: "Insecure Deserialization",
        severity: "high",
        cvss_score: 7.8,
        status: "open",
        affected_application: Now.ID["app-3"],
        discovered_date: "2024-03-01",
    },
});

export const vuln7 = Record({
    $id: Now.ID["vuln-7"],
    table: "x_1658278_riskview_vulnerability",
    data: {
        title: "Weak Password Policy",
        severity: "medium",
        cvss_score: 5.0,
        status: "closed",
        affected_application: Now.ID["app-4"],
        discovered_date: "2024-03-10",
    },
});

export const vuln8 = Record({
    $id: Now.ID["vuln-8"],
    table: "x_1658278_riskview_vulnerability",
    data: {
        title: "Unpatched Apache Struts",
        severity: "critical",
        cvss_score: 9.5,
        status: "open",
        affected_application: Now.ID["app-5"],
        discovered_date: "2024-03-15",
    },
});

// =====================
// Risk Control Records
// =====================

export const control1 = Record({
    $id: Now.ID["control-1"],
    table: "x_1658278_riskview_risk_control",
    data: {
        name: "Web Application Firewall",
        control_type: "preventive",
        effectiveness: "effective",
        application: Now.ID["app-1"],
        implementation_status: "implemented",
    },
});

export const control2 = Record({
    $id: Now.ID["control-2"],
    table: "x_1658278_riskview_risk_control",
    data: {
        name: "Intrusion Detection System",
        control_type: "detective",
        effectiveness: "effective",
        application: Now.ID["app-3"],
        implementation_status: "implemented",
    },
});

export const control3 = Record({
    $id: Now.ID["control-3"],
    table: "x_1658278_riskview_risk_control",
    data: {
        name: "Patch Management Program",
        control_type: "corrective",
        effectiveness: "partially_effective",
        application: Now.ID["app-5"],
        implementation_status: "in_progress",
    },
});

export const control4 = Record({
    $id: Now.ID["control-4"],
    table: "x_1658278_riskview_risk_control",
    data: {
        name: "Multi-Factor Authentication",
        control_type: "preventive",
        effectiveness: "effective",
        application: Now.ID["app-4"],
        implementation_status: "implemented",
    },
});

export const control5 = Record({
    $id: Now.ID["control-5"],
    table: "x_1658278_riskview_risk_control",
    data: {
        name: "Code Review Process",
        control_type: "preventive",
        effectiveness: "partially_effective",
        application: Now.ID["app-2"],
        implementation_status: "implemented",
    },
});

export const control6 = Record({
    $id: Now.ID["control-6"],
    table: "x_1658278_riskview_risk_control",
    data: {
        name: "Incident Response Plan",
        control_type: "corrective",
        effectiveness: "effective",
        application: Now.ID["app-1"],
        implementation_status: "implemented",
    },
});

// =====================
// Security Incident Records
// =====================

export const incident1 = Record({
    $id: Now.ID["incident-1"],
    table: "x_1658278_riskview_security_incident",
    data: {
        title: "Unauthorized Access Attempt",
        severity: "high",
        status: "investigating",
        affected_application: Now.ID["app-1"],
        reported_date: "2024-01-15",
    },
});

export const incident2 = Record({
    $id: Now.ID["incident-2"],
    table: "x_1658278_riskview_security_incident",
    data: {
        title: "Data Exfiltration Detected",
        severity: "critical",
        status: "contained",
        affected_application: Now.ID["app-2"],
        reported_date: "2024-02-20",
    },
});

export const incident3 = Record({
    $id: Now.ID["incident-3"],
    table: "x_1658278_riskview_security_incident",
    data: {
        title: "Ransomware Attack",
        severity: "critical",
        status: "resolved",
        affected_application: Now.ID["app-3"],
        reported_date: "2024-03-10",
        resolved_date: "2024-03-15",
    },
});

export const incident4 = Record({
    $id: Now.ID["incident-4"],
    table: "x_1658278_riskview_security_incident",
    data: {
        title: "Phishing Campaign",
        severity: "medium",
        status: "closed",
        affected_application: Now.ID["app-4"],
        reported_date: "2024-04-05",
        resolved_date: "2024-04-06",
    },
});

export const incident5 = Record({
    $id: Now.ID["incident-5"],
    table: "x_1658278_riskview_security_incident",
    data: {
        title: "DDoS Attack",
        severity: "high",
        status: "new",
        affected_application: Now.ID["app-5"],
        reported_date: "2024-05-01",
    },
});

export const incident6 = Record({
    $id: Now.ID["incident-6"],
    table: "x_1658278_riskview_security_incident",
    data: {
        title: "Insider Threat",
        severity: "high",
        status: "investigating",
        affected_application: Now.ID["app-1"],
        reported_date: "2024-05-15",
    },
});
