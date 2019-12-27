import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { DragulaService } from 'ng2-dragula';
import { DataTableModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { IncomingOrdersComponent } from './incoming-orders/incoming-orders.component';
import { ReportsComponent } from './reports.component';
import { ConfirmedAppointmentsComponent } from './confirmed-appointments/confirmed-appointments.component';

export const routes = [
<<<<<<< HEAD
  { path: '', redirectTo: 'rawdata', pathMatch: 'full' },
  //{ path: 'users', loadChildren: './users/users.module#UsersModule', data: { breadcrumb: 'Users' } },
  { path: 'rawdata', component: IncomingOrdersComponent, data: { breadcrumb: 'Assign Orders' } },
  // { path: 'patientstatus', component: PatientStatusComponent, data: { breadcrumb: 'Patient Status' } },
  // { path: 'lostsalesreport', component: LostSalesReportComponent, data: { breadcrumb: 'Lost Sales Report' } },
  // { path: 'billingstatus', component: BillingStatusComponent, data: { breadcrumb: 'Billing Status' } },
  // { path: 'incomingreferral', component: IncomingStatusComponent, data: { breadcrumb: 'Incoming Referral' } },
  // { path: 'outgoingreferral', component: OutgoingReferralComponent, data: { breadcrumb: 'Outgoing Referral' } },
=======
  { path: '', redirectTo: 'incomingorders', pathMatch: 'full' },
  { path: 'incomingorders', component: IncomingOrdersComponent,loadChildren: './incoming-orders/incoming-orders.module#IncomingOrdersModule', data: { breadcrumb: 'Incoming Orders' } },
  { path: 'completedAppointments', component: ConfirmedAppointmentsComponent, data: { breadcrumb: 'Completed Appointments' } },
>>>>>>> 424bab94b42de691b2fb230219ac1998a2fbe3a0
 
];

@NgModule({
  declarations: [IncomingOrdersComponent, ReportsComponent, ConfirmedAppointmentsComponent],
  imports: [
    CommonModule, ModalModule, SharedModule, ConfirmationPopoverModule,
    RouterModule.forChild(routes), DataTableModule, FormsModule, ReactiveFormsModule, TableModule,
    SharedModule,OwlDateTimeModule,OwlNativeDateTimeModule
  ]
})
export class ReportsModule { }
