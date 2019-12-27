import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AgmCoreModule } from '@agm/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { TrendChartComponent } from './trend-chart/trend-chart.component';
<<<<<<< HEAD
import {NgxPaginationModule} from 'ngx-pagination';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';




=======
>>>>>>> 424bab94b42de691b2fb230219ac1998a2fbe3a0

export const routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full', data :{breadcrumb : 'Dashboard'} }
];

@NgModule({
  imports: [
    ConfirmationPopoverModule,
    CommonModule,
    AngularMultiSelectModule,
    NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forChild(routes),
    FormsModule,
    NgxChartsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    SharedModule,
    AgmCoreModule,
    NgxPaginationModule
  ],
  declarations: [
    DashboardComponent,
    AnalyticsComponent,
    TrendChartComponent,
  ]
})
export class DashboardModule { }