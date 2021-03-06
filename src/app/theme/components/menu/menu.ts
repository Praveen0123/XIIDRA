import { Menu } from './menu.model';
 
export const verticalMenuItems = [
    // new Menu(1, 'Dashboard', '/sapphire/dashboard', null, 'dashboard', null, false, 0, "white"),
    new Menu(2, 'Patients', '/sapphire/patients', null, 'accessible', null, true, 0, "white"),
    // new Menu(3, 'Billing', '/sapphire/billing', null, 'attach_money', null, true, 0, "white"),
    // new Menu(4, 'Reports', '/sapphire/reports', null, 'assignment', null, true, 0, "white"),
    new Menu(5, 'Admin', '/sapphire/admin', null, 'person', null, true, 0, "white"),
    // new Menu(6, 'Incoming Order Queue','/sapphire/patients/incomingorders', null, 'filter_none', null, false, 2, "white"),
    new Menu(7, 'Manage Cases','/sapphire/patients/managecases', null, 'accessible_forward', null, false, 2, "white"),
    // new Menu(8, 'Manage Patients','/sapphire/patients/managepatientrecords', null, 'assignment', null, false, 2, "white"),
    new Menu(9, 'Manage Visits','/sapphire/patients/managevisits', null, 'schedule', null, false, 2, "white"),
    new Menu(10, 'Manage Claims','/sapphire/billing/manageclaims', null, 'list_alt', null, false, 3, "white"),
    new Menu(11, 'Manage Collections','/sapphire/billing/manageCollections', null, 'collections', null, false, 3, "white"),
    new Menu(12, 'Received Claims','/sapphire/billing/receivedClaims', null, 'arrow_downward', null, false, 3, "white"),
    new Menu(19, 'Cancelled Claims','/sapphire/billing/cancelledClaims', null, 'cancel', null, false, 3, "white"),
    new Menu(13, 'Incoming Orders', '/sapphire/reports/incomingorders', null, 'filter_none', null, true, 4, "white"),
    new Menu(14, 'Completed Appointments', '/sapphire/reports/completedAppointments', null, 'arrow_back', null, false, 4, "white"),
    new Menu(15, 'Permissions', '/sapphire/admin/permissions', null, 'fingerprint', null, false, 5, "white"),
    new Menu(16, 'Users', '/sapphire/admin/users', null, 'group_add', null, false, 5, "white"),
    new Menu(17, 'Availability Calendar', '/sapphire/admin/availabilitycalendar', null, 'calendar_today', null, true, 5, "white"),
    new Menu(18, 'Master Data', '/sapphire/admin/masterdata', null, 'dvr', null, false, 5, "white"),
    // new Menu(19, 'Itemised Statements', '/sapphire/reports/itemisedStatements', null, 'post_add', null, true, 4, "lightskyblue"),
    // new Menu(12, 'Ageing Analysis','/sapphire/billing/ageinganalysis', null, 'assessment', null, false, 3, "lightskyblue"),
    // new Menu(11, 'Manage Schedules','/sapphire/patients/manageschedules', null, 'schedule', null, false, 2, "white"),
    // new Menu(45, 'Appointments','/sapphire/patients/appointments', null, 'schedule', null, true, 2, "lightskyblue"),
    // Wanted page new Menu(41, 'Visit Records','/sapphire/patients/patientvisitrecords', null, 'confirmation_number', null, false, 2, "white"),
    // new Menu(12, 'Confirm Appointments','/sapphire/patients/confirmappointments', null, 'confirmation_number', null, false, 2, "white"),
    // new Menu(13, 'Assign Physicians','/sapphire/patients/assignphysicians', null, 'assignment_turned_in', null, false, 2, "white"),
    // new Menu(14, 'Text Log','/sapphire/patients/textlog', null, 'message', null, false, 2, "lightskyblue"),
    // new Menu(24, 'Create Claims',null, null, 'note_add', null, true, 3, "lightskyblue"),
    // new Menu(16, 'Attorneys', '/sapphire/admin/attorneys', null, 'record_voice_over', null, false, 5, "lightskyblue"),
    // new Menu(18, 'Internal Physicians', '/sapphire/admin/iphysicians', null, 'person', null, false, 5, "lightskyblue"),
    // new Menu(20, 'CPT Codes', '/sapphire/admin/cptcodes', null, 'perm_identity', null, false, 5, "lightskyblue"),
    // new Menu(17, 'ICD Codes', '/sapphire/admin/icdcodes', null, 'perm_identity', null, false, 5, "lightskyblue"),
    // new Menu(48, 'Lookup Options', '/sapphire/admin/lookups', null, 'zoom_in', null, false, 5, "lightskyblue"),
    // new Menu(21, 'Pharmacies', '/sapphire/admin/pharmacies', null, 'insert_chart_outlined', null, false, 5, "white"),
    // new Menu(22, 'Referring Physicians', '/sapphire/admin/referringphysicians', null, 'face', null, false, 5, "lightskyblue"),
    // new Menu(23, 'Imaging Partners', '/sapphire/admin/imagingpartners', null, 'image_search', null, false, 5, "white"),
    // new Menu(46, 'Settings', '/sapphire/admin/settings', null, 'settings', null, false, 5, "lightskyblue"),
    // new Menu(47, 'Error Log', '/sapphire/admin/errorLog', null, 'error', null, false, 5, "lightskyblue"),
    // new Menu(29, 'Text Templates', '/sapphire/admin/texttemplates', null, 'forum', null, false, 5, "lightskyblue"),
    // new Menu(30, 'Email Templates', '/sapphire/admin/emailtemplates', null, 'email', null, false, 5, "lightskyblue"),
    // new Menu(31, 'Event Log', '/sapphire/admin/eventlog', null, 'bookmark', null, false, 5, "lightskyblue"),
    // new Menu(51, 'Referring Physicians', '/sapphire/reports/referringPhysicians', null, 'filter_none', null, false, 4, "orange"),
    // new Menu(52, 'Attorneys', '/sapphire/reports/attorneys', null, 'filter_none', null, false, 4, "orange"),
    // new Menu(34, 'Patient Status', '/sapphire/reports/patientstatus', null, 'accessible_forward', null, false, 4, "orange"),
    // new Menu(35, 'Lost Sales Report', '/sapphire/reports/lostsalesreport', null, 'assignment', null, false, 4, "orange"),
    // new Menu(36, 'Billing Status', '/sapphire/reports/billingstatus', null, 'forum', null, false, 4, "orange"),
    // new Menu(37, 'Incoming Referral', '/sapphire/reports/incomingreferral', null, 'arrow_forward', null, false, 4, "orange"),
]

export const horizontalMenuItems = [
<<<<<<< HEAD
    new Menu(1, 'Vouchers', '/mako/dashboard', null, 'dashboard', null, false, 0, "lightskyblue"),
    new Menu(2, 'Physicians', '/mako/patients/incomingorders', null, 'accessible', null, false, 0, "lightskyblue"),
    new Menu(3, 'Assign  Orders', '/mako/reports', null, 'assignment', null, true, 0, "lightskyblue"),
    new Menu(4, 'Assign  Vouchers', '/mako/billing', null, 'blur_on', null, true, 0, "lightskyblue"),
    new Menu(5, 'Inventory', '/mako/admin', null, 'person', null, true, 0, "lightskyblue"),
    // new Menu(6, 'Users', '/mako/admin/users', null, 'group_add', null, false, 5, "lightskyblue"),
    // new Menu(7, 'Master Data', '/mako/admin/masterdata', null, 'dvr', null, true, 5, "lightskyblue"),
    // new Menu(8, 'Settings', '/mako/admin/settings', null, 'settings', null, false, 5, "lightskyblue"),
=======
    // new Menu(1, 'Dashboard', '/sapphire/dashboard', null, 'dashboard', null, false, 0, "white"),
    new Menu(2, 'Patients', '/sapphire/patients', null, 'accessible', null, true, 0, "white"),
    // new Menu(3, 'Billing', '/sapphire/billing', null, 'attach_money', null, true, 0, "white"),
    // new Menu(4, 'Reports', '/sapphire/reports', null, 'assignment', null, true, 0, "white"),
    new Menu(5, 'Admin', '/sapphire/admin', null, 'person', null, true, 0, "white"),
    // new Menu(6, 'Incoming Order Queue','/sapphire/patients/incomingorders', null, 'filter_none', null, false, 2, "white"),
    new Menu(7, 'Manage Cases','/sapphire/patients/managecases', null, 'accessible_forward', null, false, 2, "white"),
    // new Menu(8, 'Manage Patients','/sapphire/patients/managepatientrecords', null, 'assignment', null, false, 2, "white"),
    new Menu(9, 'Manage Visits','/sapphire/patients/managevisits', null, 'schedule', null, true, 2, "white"),
    new Menu(10, 'Manage Claims','/sapphire/billing/manageclaims', null, 'list_alt', null, false, 3, "white"),
    new Menu(11, 'Manage Collections','/sapphire/billing/manageCollections', null, 'collections', null, false, 3, "white"),
    new Menu(12, 'Received Claims','/sapphire/billing/receivedClaims', null, 'arrow_downward', null, false, 3, "white"),
    new Menu(19, 'Cancelled Claims','/sapphire/billing/cancelledClaims', null, 'cancel', null, false, 3, "white"),
    new Menu(13, 'Incoming Orders', '/sapphire/reports/incomingorders', null, 'filter_none', null, true, 4, "white"),
    new Menu(14, 'Completed Appointments', '/sapphire/reports/completedAppointments', null, 'arrow_back', null, false, 4, "white"),
    new Menu(15, 'Permissions', '/sapphire/admin/permissions', null, 'fingerprint', null, false, 5, "white"),
    new Menu(16, 'Users', '/sapphire/admin/users', null, 'group_add', null, false, 5, "white"),
    new Menu(17, 'Availability Calendar', '/sapphire/admin/availabilitycalendar', null, 'calendar_today', null, true, 5, "white"),
    new Menu(18, 'Master Data', '/sapphire/admin/masterdata', null, 'dvr', null, true, 5, "white"),
    // new Menu(19, 'Itemised Statements', '/sapphire/reports/itemisedStatements', null, 'post_add', null, true, 4, "lightskyblue"),
    // new Menu(12, 'Ageing Analysis','/sapphire/billing/ageinganalysis', null, 'assessment', null, false, 3, "lightskyblue"),
    // new Menu(11, 'Manage Schedules','/sapphire/patients/manageschedules', null, 'schedule', null, false, 2, "white"),
    // new Menu(45, 'Appointments','/sapphire/patients/appointments', null, 'schedule', null, true, 2, "lightskyblue"),
    // Wanted page new Menu(41, 'Visit Records','/sapphire/patients/patientvisitrecords', null, 'confirmation_number', null, false, 2, "white"),
    // new Menu(12, 'Confirm Appointments','/sapphire/patients/confirmappointments', null, 'confirmation_number', null, false, 2, "white"),
    // new Menu(13, 'Assign Physicians','/sapphire/patients/assignphysicians', null, 'assignment_turned_in', null, false, 2, "white"),
    // new Menu(14, 'Text Log','/sapphire/patients/textlog', null, 'message', null, false, 2, "lightskyblue"),
    // new Menu(24, 'Create Claims',null, null, 'note_add', null, true, 3, "lightskyblue"),
    // new Menu(16, 'Attorneys', '/sapphire/admin/attorneys', null, 'record_voice_over', null, false, 5, "lightskyblue"),
    // new Menu(18, 'Internal Physicians', '/sapphire/admin/iphysicians', null, 'person', null, false, 5, "lightskyblue"),
    // new Menu(20, 'CPT Codes', '/sapphire/admin/cptcodes', null, 'perm_identity', null, false, 5, "lightskyblue"),
    // new Menu(17, 'ICD Codes', '/sapphire/admin/icdcodes', null, 'perm_identity', null, false, 5, "lightskyblue"),
    // new Menu(48, 'Lookup Options', '/sapphire/admin/lookups', null, 'zoom_in', null, false, 5, "lightskyblue"),
    // new Menu(21, 'Pharmacies', '/sapphire/admin/pharmacies', null, 'insert_chart_outlined', null, false, 5, "white"),
    // new Menu(22, 'Referring Physicians', '/sapphire/admin/referringphysicians', null, 'face', null, false, 5, "lightskyblue"),
    // new Menu(23, 'Imaging Partners', '/sapphire/admin/imagingpartners', null, 'image_search', null, false, 5, "white"),
    // new Menu(46, 'Settings', '/sapphire/admin/settings', null, 'settings', null, false, 5, "lightskyblue"),
    // new Menu(47, 'Error Log', '/sapphire/admin/errorLog', null, 'error', null, false, 5, "lightskyblue"),
    // new Menu(29, 'Text Templates', '/sapphire/admin/texttemplates', null, 'forum', null, false, 5, "lightskyblue"),
    // new Menu(30, 'Email Templates', '/sapphire/admin/emailtemplates', null, 'email', null, false, 5, "lightskyblue"),
    // new Menu(31, 'Event Log', '/sapphire/admin/eventlog', null, 'bookmark', null, false, 5, "lightskyblue"),
    // new Menu(51, 'Referring Physicians', '/sapphire/reports/referringPhysicians', null, 'filter_none', null, false, 4, "orange"),
    // new Menu(52, 'Attorneys', '/sapphire/reports/attorneys', null, 'filter_none', null, false, 4, "orange"),
    // new Menu(34, 'Patient Status', '/sapphire/reports/patientstatus', null, 'accessible_forward', null, false, 4, "orange"),
    // new Menu(35, 'Lost Sales Report', '/sapphire/reports/lostsalesreport', null, 'assignment', null, false, 4, "orange"),
    // new Menu(36, 'Billing Status', '/sapphire/reports/billingstatus', null, 'forum', null, false, 4, "orange"),
    // new Menu(37, 'Incoming Referral', '/sapphire/reports/incomingreferral', null, 'arrow_forward', null, false, 4, "orange"),
>>>>>>> 424bab94b42de691b2fb230219ac1998a2fbe3a0
]
