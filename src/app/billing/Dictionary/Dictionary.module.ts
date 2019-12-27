import { AlertService } from 'src/app/shared/services/alert.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import { DataTableModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ScopeComponent } from './Scope/Scope.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SeqResultsComponent } from './SeqResults/SeqResults.component';
import { DRIComponent } from './DRI/DRI.component';
import { MessagesComponent } from './Messages/Messages.component';
import { PersonalComponent } from './Personal/Personal.component';
import { AddMessageComponent } from './Messages/addMessage/addMessage.component';
import { AddDRIComponent } from './DRI/addDRI/addDRI.component';
import { ViewCertificatesComponent } from './Scope/view-certificates/view-certificates.component';

export const routes = [
{ path: '', redirectTo: 'Scope' },
{ path: 'Scope', component: ScopeComponent, data: { breadcrumb: '' } },
{ path: 'SeqResults', component: SeqResultsComponent, data: { breadcrumb: 'Seq Results' } },
{ path: 'DRI', component: DRIComponent, data: { breadcrumb: 'D R I' } },
{ path: 'Messages', component: MessagesComponent, data: { breadcrumb: 'Messages' } },
];

@NgModule({
declarations: [ ScopeComponent, SeqResultsComponent, DRIComponent,AddDRIComponent, MessagesComponent,AddMessageComponent,PersonalComponent, ViewCertificatesComponent ],
imports: [
CommonModule, ModalModule, SharedModule, ConfirmationPopoverModule,
RouterModule.forChild(routes), DataTableModule, FormsModule, ReactiveFormsModule, TableModule,
SharedModule, NgxChartsModule, OwlDateTimeModule, OwlNativeDateTimeModule
],
entryComponents: [AddMessageComponent,AddDRIComponent, ViewCertificatesComponent],
providers:[AlertService]
})
export class DictionaryModule { }