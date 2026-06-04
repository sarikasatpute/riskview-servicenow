import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Application Menu
export const riskviewMenu = Record({
    $id: Now.ID['riskview-menu'],
    table: 'sys_app_application',
    data: {
        title: 'Cyber Risk Intelligence',
        hint: 'Cyber risk intelligence and vulnerability management dashboard',
        device_type: 'browser',
        category: 'Custom Applications',
        order: 500,
        active: true,
    },
})

// Module: Dashboard (landing page)
export const dashboardModule = Record({
    $id: Now.ID['module-dashboard'],
    table: 'sys_app_module',
    data: {
        title: 'Dashboard',
        application: '3cb3634f1cdb4ce5b2222df0514b433f',
        order: 600,
        link_type: 'DIRECT',
        query: 'x_1658278_riskview_dashboard.do',
        active: true,
        mobile_title: 'Dashboard',
        mobile_view_name: 'Mobile',
        override_menu_roles: false,
        require_confirmation: false,
        sys_domain: 'global',
        sys_domain_path: '/',
        uncancelable: false,
    },
})

// Module: Applications
export const applicationsModule = Record({
    $id: Now.ID['module-applications'],
    table: 'sys_app_module',
    data: {
        title: 'Applications',
        application: '3cb3634f1cdb4ce5b2222df0514b433f',
        order: 200,
        link_type: 'LIST',
        name: 'x_1658278_riskview_application',
        active: true,
        mobile_title: 'Applications',
        mobile_view_name: 'Mobile',
        override_menu_roles: false,
        require_confirmation: false,
        sys_domain: 'global',
        sys_domain_path: '/',
        uncancelable: false,
    },
})

// Module: Vulnerabilities
export const vulnerabilitiesModule = Record({
    $id: Now.ID['module-vulnerabilities'],
    table: 'sys_app_module',
    data: {
        title: 'Vulnerabilities',
        application: '3cb3634f1cdb4ce5b2222df0514b433f',
        order: 300,
        link_type: 'LIST',
        name: 'x_1658278_riskview_vulnerability',
        active: true,
        mobile_title: 'Vulnerabilities',
        mobile_view_name: 'Mobile',
        override_menu_roles: false,
        require_confirmation: false,
        sys_domain: 'global',
        sys_domain_path: '/',
        uncancelable: false,
    },
})

// Module: Risk Controls
export const riskControlsModule = Record({
    $id: Now.ID['module-risk-controls'],
    table: 'sys_app_module',
    data: {
        title: 'Risk Controls',
        application: '3cb3634f1cdb4ce5b2222df0514b433f',
        order: 400,
        link_type: 'LIST',
        name: 'x_1658278_riskview_risk_control',
        active: true,
        mobile_title: 'Risk Controls',
        mobile_view_name: 'Mobile',
        override_menu_roles: false,
        require_confirmation: false,
        sys_domain: 'global',
        sys_domain_path: '/',
        uncancelable: false,
    },
})

// Module: Security Incidents
export const securityIncidentsModule = Record({
    $id: Now.ID['module-security-incidents'],
    table: 'sys_app_module',
    data: {
        title: 'Security Incidents',
        application: '3cb3634f1cdb4ce5b2222df0514b433f',
        order: 500,
        link_type: 'LIST',
        name: 'x_1658278_riskview_security_incident',
        active: true,
        mobile_title: 'Security Incidents',
        mobile_view_name: 'Mobile',
        override_menu_roles: false,
        require_confirmation: false,
        sys_domain: 'global',
        sys_domain_path: '/',
        uncancelable: false,
    },
})
