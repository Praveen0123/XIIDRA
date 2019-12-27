import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { PharmaciesComponent } from './pharmacies/pharmacies.component';
import { ImagingPartnersComponent } from './imaging-partners/imaging-partners.component';
import { BusinessCentersComponent } from './business-centers/business-centers.component';
import { ClinicalCategoriesComponent } from './clinical-categories/clinical-categories.component';
import { VisitStatusComponent } from './visit-status/visit-status.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ClaimStatusComponent } from './claim-status/claim-status.component';
import { AddPharmacyComponent } from './pharmacies/add-pharmacy/add-pharmacy.component';
import { AddIPartnerComponent } from './imaging-partners/add-i-partner/add-i-partner.component';
import { AddBusinessCenterComponent } from './business-centers/add-business-center/add-business-center.component';
import { AddClaimStatusComponent } from './claim-status/add-claim-status/add-claim-status.component';
import { AddClinicalCategoryComponent } from './clinical-categories/add-clinical-category/add-clinical-category.component';
import { AddQuestionnaireComponent } from './questionnaire/add-questionnaire/add-questionnaire.component';
import { AddVisitStatusComponent } from './visit-status/add-visit-status/add-visit-status.component';
import { VisitConfirmationStatusComponent } from './visit-confirmation-status/visit-confirmation-status.component';
import { AddVisitConfirmationStatusComponent } from './visit-confirmation-status/add-visit-confirmation-status/add-visit-confirmation-status.component';
import { EventLogComponent } from './event-log/event-log.component';
import { TextTemplatesComponent } from './text-templates/text-templates.component';
import { EmailTemplatesComponent } from './email-templates/email-templates.component';
import { AddEmailTemplateComponent } from './email-templates/add-email-template/add-email-template.component';
import { AddTextTemplateComponent } from './text-templates/add-text-template/add-text-template.component';
import { ManageCptCodesComponent } from './manage-cpt-codes/manage-cpt-codes.component';
import { ManageIcdCodesComponent } from './manage-icd-codes/manage-icd-codes.component';
import { AddCptCodeComponent } from './manage-cpt-codes/add-cpt-code/add-cpt-code.component';
import { AddIcdCodeComponent } from './manage-icd-codes/add-icd-code/add-icd-code.component';
import { ErrorLogComponent } from './error-log/error-log.component';
import { LookupOptionsComponent } from './lookup-options/lookup-options.component';
import { AddLookupDialogComponent } from './lookup-options/add-lookup-dialog/add-lookup-dialog.component';
import { AppointmentCodesComponent } from './appointment-codes/appointment-codes.component';
import { AddAppointmentCodeComponent } from './appointment-codes/add-appointment-code/add-appointment-code.component';
import { AttorneysComponent } from './attorneys/attorneys.component';
import { AddAttorneyComponent } from './attorneys/add-attorney/add-attorney.component';
import { MasterComponent } from './master/master.component';
import { TextMaskModule } from 'angular2-text-mask';
import { ImagingCodesComponent } from './imaging-codes/imaging-codes.component';
import { AddImagingCodeComponent } from './imaging-codes/add-imaging-code/add-imaging-code.component';
import { AlertService } from '../../shared/services/alert.service';

const route: Routes = [
<<<<<<< HEAD
  { path: '', redirectTo: 'pharmacies', pathMatch: 'full' },
  { path: 'pharmacies', component: PharmaciesComponent, data: { breadcrumb: '' } },
=======
  { path: '', redirectTo: 'appointmentCodes', pathMatch: 'full' },
  { path: 'pharmacies', component: PharmaciesComponent, data: { breadcrumb: 'Pharmacies' } },
>>>>>>> 424bab94b42de691b2fb230219ac1998a2fbe3a0
  { path: 'imaging', component: ImagingPartnersComponent, data: { breadcrumb: 'Imaging Partners' } },
  { path: 'businesscenters', component: BusinessCentersComponent, data: { breadcrumb: 'Business Centers' } },
  { path: 'clinicalcategories', component: ClinicalCategoriesComponent, data: { breadcrumb: 'Clinical Categories' } },
  { path: 'visitstatus', component: VisitStatusComponent, data: { breadcrumb: 'Worklist Status' } },
  { path: 'questionnaire', component: QuestionnaireComponent, data: { breadcrumb: 'Imaging Partners' } },
  { path: 'claimstatus', component: ClaimStatusComponent, data: { breadcrumb: 'Claim Status' } },
  { path: 'visitConfirmationStatus', component: VisitConfirmationStatusComponent, data: { breadcrumb: 'Visit Confirmation Status' } },
  { path: 'CPTCodes', component: ManageCptCodesComponent, data: { breadcrumb: 'CPT Codes' } },
  { path: 'ICDCodes', component: ManageIcdCodesComponent, data: { breadcrumb: 'ICD Codes' } },
  { path: 'textTemplates', component: TextTemplatesComponent, data: { breadcrumb: 'Text Templates' } },
  { path: 'emailTemplates', component: EmailTemplatesComponent, data: { breadcrumb: 'Email Templates' } },
  { path: 'errorLog', component: ErrorLogComponent, data: { breadcrumb: 'Error Log' } },
  { path: 'eventLog', component: EventLogComponent, data: { breadcrumb: 'Event Log' } },
  { path: 'lookupOptions', component: LookupOptionsComponent, data: { breadcrumb: 'Imaging Partners' } },
  { path: 'appointmentCodes', component: AppointmentCodesComponent, data: { breadcrumb: 'Appointment Codes' } },
  { path: 'attorneys', component: AttorneysComponent, data: { breadcrumb: 'Attorneys' } },
  { path: 'imagingCodes', component: ImagingCodesComponent, data: { breadcrumb: 'Imaging Codes' } },

]

@NgModule({
  declarations: [AttorneysComponent,AddAttorneyComponent,PharmaciesComponent,EventLogComponent,AddEmailTemplateComponent,AddTextTemplateComponent,AddCptCodeComponent,TextTemplatesComponent,EmailTemplatesComponent,ManageCptCodesComponent,ManageIcdCodesComponent,ErrorLogComponent,AddIcdCodeComponent,LookupOptionsComponent, ImagingPartnersComponent, BusinessCentersComponent, ClinicalCategoriesComponent, VisitStatusComponent, QuestionnaireComponent, ClaimStatusComponent, AddPharmacyComponent, AddIPartnerComponent, AddBusinessCenterComponent, AddClaimStatusComponent, AddClinicalCategoryComponent, AddQuestionnaireComponent, AddVisitStatusComponent, VisitConfirmationStatusComponent, AddVisitConfirmationStatusComponent,AddLookupDialogComponent, AppointmentCodesComponent, AddAppointmentCodeComponent, MasterComponent, ImagingCodesComponent, AddImagingCodeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    PipesModule,ConfirmationPopoverModule,TextMaskModule
  ],
  providers:[SharedModule,AlertService],
  entryComponents:[AddAttorneyComponent,AddImagingCodeComponent,AddAppointmentCodeComponent,AddLookupDialogComponent,AddIcdCodeComponent,AddCptCodeComponent,AddTextTemplateComponent,AddEmailTemplateComponent,AddPharmacyComponent,AddIPartnerComponent,AddBusinessCenterComponent,AddVisitConfirmationStatusComponent,AddClaimStatusComponent,AddClinicalCategoryComponent,AddQuestionnaireComponent,AddVisitStatusComponent]
})
export class MasterDataModule { }
