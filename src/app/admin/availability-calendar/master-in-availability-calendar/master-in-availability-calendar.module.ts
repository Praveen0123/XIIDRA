import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { MasterInAvailabilityCalendarComponent } from './master-in-availability-calendar.component';

@NgModule({
  declarations: [MasterInAvailabilityCalendarComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[MasterInAvailabilityCalendarComponent]
})
export class MasterInAvailabilityCalendarModule { }
