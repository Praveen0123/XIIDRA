import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { PhysicianTimingsComponent } from './physician-timings/physician-timings.component';
import { PhysicianHolidaysComponent } from './physician-holidays/physician-holidays.component';
import { PhysicianWeekoffComponent } from './physician-weekoff/physician-weekoff.component';
import { PhysicianUnavailableComponent } from './physician-unavailable/physician-unavailable.component';
import { EditPhysicianTimingDialogComponent } from './physician-timings/edit-physician-timing-dialog/edit-physician-timing-dialog.component';
import { AddPhysicianHolidayDialogComponent } from './physician-holidays/add-physician-holiday-dialog/add-physician-holiday-dialog.component';
import { EditPhysicianWeekoffDialogComponent } from './physician-weekoff/edit-physician-weekoff-dialog/edit-physician-weekoff-dialog.component';
// import { MasterInAvailabilityCalendarComponent } from './master-in-availability-calendar/master-in-availability-calendar.component';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MasterInAvailabilityCalendarModule } from './master-in-availability-calendar/master-in-availability-calendar.module';
import { PhysicianSpecialCaseComponent } from './physician-special-case/physician-special-case.component';
import { AddPhysicianSpecialCaseComponent } from './physician-special-case/add-physician-special-case/add-physician-special-case.component';

export const routes = [
  { path: '', redirectTo: 'timings', pathMatch: 'full' },
  { path: 'timings', component:PhysicianTimingsComponent,loadChildren:"./physician-timings/physician-timings.module#PhysicianTimingsModule", data: { breadcrumb: 'Timings'} },
  { path: 'holidays', component:PhysicianHolidaysComponent, pathMatch: 'full', data: { breadcrumb: 'Holidays'} },
  { path: 'weekoffs', component:PhysicianWeekoffComponent, pathMatch: 'full', data: { breadcrumb: 'Week-Offs'} },
  { path: 'unavailables', component:PhysicianUnavailableComponent, pathMatch: 'full', data: { breadcrumb: 'Unavailable'} },
  { path: 'specialcase', component:PhysicianSpecialCaseComponent, pathMatch: 'full', data: { breadcrumb: 'Unavailable'} },
  
 
];

@NgModule({
  declarations: [PhysicianTimingsComponent, PhysicianHolidaysComponent, PhysicianWeekoffComponent, PhysicianUnavailableComponent, EditPhysicianTimingDialogComponent, AddPhysicianHolidayDialogComponent, EditPhysicianWeekoffDialogComponent, PhysicianSpecialCaseComponent, AddPhysicianSpecialCaseComponent],
  imports: [
    CommonModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    PipesModule,ConfirmationPopoverModule,MasterInAvailabilityCalendarModule
  ],
  providers:[AlertService],
  entryComponents:[AddPhysicianSpecialCaseComponent,EditPhysicianWeekoffDialogComponent,AddPhysicianHolidayDialogComponent,EditPhysicianTimingDialogComponent]
})
export class AvailabilityCalendarModule { }
