import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { DragulaService } from 'ng2-dragula';
import { DataTableModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { TableModule } from 'primeng/table';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AlertService } from '../shared/services/alert.service';
import { AvailabilityCalendarComponent } from './availability-calendar/availability-calendar.component';
import { CalendarModule } from 'angular-calendar';
import { FullCalendarModule } from 'ng-fullcalendar';
//import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { Angular5TimePickerModule } from 'angular5-time-picker';
import { ScheduleDialogComponent } from './availability-calendar/schedule-dialog/schedule-dialog.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { AddPermissionComponent } from './permissions/add-permission/add-permission.component';
import { RolePermissionsComponent } from './permissions/role-permissions/role-permissions.component';

export const routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', loadChildren: './users/users.module#UsersModule', data: { breadcrumb: 'Inventory' } },
  { path: 'masterdata', component: MasterDataComponent,loadChildren: './master-data/master-data.module#MasterDataModule', data : { breadcrumb : 'Master Data'} },
  { path: 'permissions', component:PermissionsComponent, pathMatch: 'full', data: { breadcrumb: 'Permissions'} },
  { path: 'permissions/rolepermissions', component:RolePermissionsComponent, pathMatch: 'full', data: { breadcrumb: 'Role Permissions'} },
  { path: 'availabilitycalendar', component:AvailabilityCalendarComponent,loadChildren: './availability-calendar/availability-calendar.module#AvailabilityCalendarModule', data: { breadcrumb: 'Availability Calendar'} },
  
 
];

@NgModule({
  imports: [
    CommonModule, ModalModule, SharedModule, ConfirmationPopoverModule.forRoot({confirmButtonType:'danger'}),CalendarModule,OwlDateTimeModule, OwlNativeDateTimeModule,
    RouterModule.forChild(routes), DataTableModule, FormsModule, ReactiveFormsModule, TableModule,
    SharedModule,FullCalendarModule],

  providers: [DragulaService, AlertService],

  declarations: [ 
    AvailabilityCalendarComponent,
    ScheduleDialogComponent,
    MasterDataComponent,
    PermissionsComponent,
    AddPermissionComponent,
    RolePermissionsComponent],

  entryComponents: [
   ScheduleDialogComponent,AddPermissionComponent
  ]
})
export class AdminModule { }
