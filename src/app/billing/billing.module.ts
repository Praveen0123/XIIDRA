import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { DictionaryComponent } from './Dictionary/Dictionary.component';
=======
import { CreateclaimsComponent } from './createclaims/createclaims.component';
import { ManageclaimsComponent } from './manageclaims/manageclaims.component';
>>>>>>> 424bab94b42de691b2fb230219ac1998a2fbe3a0
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { DataTableModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
<<<<<<< HEAD
import { AlgorithmComponent } from './Algorithm/Algorithm.component';
import { BillingComponent } from './billing.component';
import { CalculationsComponent } from './Calculations/Calculations.component';
import { ReportComponent } from './Report/Report.component';
import { SamplePatientDataComponent } from './SamplePatientData/SamplePatientData.component';
import { UploadCSVComponent } from './Dictionary/SeqResults/uploadCSV/uploadCSV.component';
import { AlertService } from '../shared/services/alert.service';
import { AddAlgorithmComponent } from './Algorithm/addAlgorithm/addAlgorithm.component';

export const routes = [
  { path: '', redirectTo: 'Dictionary', pathMatch: 'full' },
  { path: 'Dictionary', component: DictionaryComponent,loadChildren:'./Dictionary/Dictionary.module#DictionaryModule' , data: { breadcrumb: ''}},
  { path: 'Algorithm', component: AlgorithmComponent, data: { breadcrumb: 'Algorithm' } },
  { path: 'Calculations', component: CalculationsComponent, data: { breadcrumb: 'Calculations' } },
  { path: 'Report', component: ReportComponent, data: { breadcrumb: 'Report' } },
  { path: 'SamplePatientData', component: SamplePatientDataComponent, data: { breadcrumb: 'Sample Patient Data' } },
];

@NgModule({
  declarations: [ DictionaryComponent,AlgorithmComponent,AddAlgorithmComponent,BillingComponent,UploadCSVComponent,CalculationsComponent,ReportComponent,SamplePatientDataComponent],
=======
import { ManageCollectionsComponent } from './manage-collections/manage-collections.component';
import { AddCollectionDialogComponent } from './manage-collections/add-collection-dialog/add-collection-dialog.component';
import { AddPatientCollectionComponent } from './manage-collections/add-patient-collection/add-patient-collection.component';
import { ViewPatientChequesCollectionComponent } from './manage-collections/view-patient-cheques-collection/view-patient-cheques-collection.component';
// import { CreateNewPatientClaimComponent } from './createclaims/create-new-patient-claim/create-new-patient-claim.component';
import { UpdateClaimReportComponent } from './update-claim-report/update-claim-report.component';
import { AlertService } from '../shared/services/alert.service';
import { CancelledClaimsComponent } from './cancelled-claims/cancelled-claims.component';
import { PaidClaimsComponent } from './paid-claims/paid-claims.component';
import { HcfaComponent } from './hcfa/hcfa.component';

export const routes = [
  { path: '', redirectTo: 'manageclaims', pathMatch: 'full' },
  { path: 'manageclaims', component: ManageclaimsComponent, data: { breadcrumb: 'Manage Claims' } },
  { path: 'createclaims', component: CreateclaimsComponent, data: { breadcrumb: 'Create Claims' } },
  { path: 'receivedClaims', component: PaidClaimsComponent, data: { breadcrumb: 'Received Claims' } },
  { path: 'cancelledClaims', component: CancelledClaimsComponent, data: { breadcrumb: 'Cancelled Claims' } },
  { path: 'createclaims/claimreport', component: UpdateClaimReportComponent, pathMatch:"full" , data: { breadcrumb: 'Add ICD Codes' } },
  { path: 'manageCollections', component: ManageCollectionsComponent, data: { breadcrumb: 'Manage Collections' } },
];

@NgModule({
  declarations: [CreateclaimsComponent, ManageclaimsComponent, BillingComponent, PieComponent, CreateNewClaimComponent, ManageCollectionsComponent, AddCollectionDialogComponent, AddPatientCollectionComponent, ViewPatientChequesCollectionComponent, UpdateClaimReportComponent, CancelledClaimsComponent, PaidClaimsComponent, HcfaComponent],
>>>>>>> 424bab94b42de691b2fb230219ac1998a2fbe3a0
  imports: [
    CommonModule, ModalModule, SharedModule, ConfirmationPopoverModule,
    RouterModule.forChild(routes), DataTableModule, FormsModule, ReactiveFormsModule, TableModule,
    SharedModule,NgxChartsModule,OwlDateTimeModule, OwlNativeDateTimeModule
  ],
<<<<<<< HEAD
  entryComponents:[UploadCSVComponent,AddAlgorithmComponent],
  providers:[AlertService]
=======
  providers:[AlertService],
  entryComponents:[CreateNewClaimComponent,AddCollectionDialogComponent,AddPatientCollectionComponent,ViewPatientChequesCollectionComponent]
>>>>>>> 424bab94b42de691b2fb230219ac1998a2fbe3a0
})
export class BillingModule { }
