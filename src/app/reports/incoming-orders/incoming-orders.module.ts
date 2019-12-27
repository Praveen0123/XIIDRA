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
import { ByReferringPhysicianComponent } from './by-referring-physician/by-referring-physician.component';
import { ByAttorneyComponent } from './by-attorney/by-attorney.component';

export const routes = [
  { path: '', redirectTo: 'byreferringPhysician', pathMatch: 'full' },
  { path: 'byreferringPhysician', component:ByReferringPhysicianComponent, data: { breadcrumb: 'Timings'} },
  { path: 'byAttorney', component:ByAttorneyComponent, data: { breadcrumb: 'Holidays'} },
  
 
];

@NgModule({
  declarations: [ByReferringPhysicianComponent, ByAttorneyComponent],
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
    PipesModule,ConfirmationPopoverModule
  ]
})
export class IncomingOrdersModule { }
