import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path:'mako',
        component: LayoutComponent, children: [
<<<<<<< HEAD
            { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            { path: 'dashboard', loadChildren: './analytics/dashboard/dashboard.module#DashboardModule',pathMatch:"full", data: { breadcrumb: 'Vouchers' }},
            { path: 'patients', loadChildren: './analytics/analytics.module#AnalyticsModule', data: { breadcrumb: '' }},
            { path: 'billing', loadChildren: './billing/billing.module#BillingModule', data: { breadcrumb: 'Assign Vouchers' }},
            { path: 'reports', loadChildren: './reports/reports.module#ReportsModule', data: { breadcrumb: '' }},
            { path: 'admin', loadChildren: './admin/admin.module#AdminModule', data: { breadcrumb: '' }},
=======
            { path: '', redirectTo: 'patients', pathMatch: 'full'},
            // { path: 'dashboard', loadChildren: './analytics/dashboard/dashboard.module#DashboardModule',pathMatch:"full", data: { breadcrumb: 'Dashboard' }},
            { path: 'patients', loadChildren: './analytics/analytics.module#AnalyticsModule', data: { breadcrumb: 'Analytics' }},
            // { path: 'billing', loadChildren: './billing/billing.module#BillingModule', data: { breadcrumb: 'Billings' }},
            // { path: 'reports', loadChildren: './reports/reports.module#ReportsModule', data: { breadcrumb: 'Reports' }},
            { path: 'admin', loadChildren: './admin/admin.module#AdminModule', data: { breadcrumb: 'Admin' }},
>>>>>>> 424bab94b42de691b2fb230219ac1998a2fbe3a0
            // { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarModule', data: { breadcrumb: 'Calendar'}}
        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent, data: { breadcrumb: 'Login' } },
    { path: '**', component: NotFoundComponent, data: { breadcrumb: 'Not found' }  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
   preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
   // useHash: true
}); 