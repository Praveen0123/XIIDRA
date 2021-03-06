import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StyleManager } from './style-manager/style-manager';
import {
  InputTextModule, GalleriaModule, MenubarModule, CheckboxModule, DialogModule, MessagesModule, GrowlModule,
  PanelModule, RadioButtonModule, InputSwitchModule, SelectButtonModule, DataTableModule, DataListModule,
  SplitButtonModule, ButtonModule, DropdownModule, AccordionModule, ProgressBarModule, ConfirmDialogModule,
  TooltipModule
} from 'primeng/primeng';
import { CalendarModule } from 'angular-calendar';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';
import { jqxKanbanComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxkanban';
import { ExportCSVDialogComponent } from './export-csv-dialog/export-csv-dialog.component';
import { SendemailDialogComponent } from './sendemail-dialog/sendemail-dialog.component';
import { AddvochersComponent } from './addvochers/addvochers.component';
import { AdditionsofvochersComponent } from './additionsofvochers/additionsofvochers.component';

import { UploadvouchersComponent } from './uploadvouchers/uploadvouchers.component';

@NgModule({
  imports: [

    CalendarModule,
    CommonModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    InputTextModule, GalleriaModule, MenubarModule,
    CheckboxModule, DialogModule, MessagesModule, GrowlModule,
    PanelModule, CalendarModule, RadioButtonModule, InputSwitchModule,
    SelectButtonModule, DataTableModule, DataListModule,
    SplitButtonModule, ButtonModule, DropdownModule, AccordionModule,
    ProgressBarModule, ConfirmDialogModule,
    TooltipModule
  ],
  exports: [

    CalendarModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule, InputTextModule, GalleriaModule, MenubarModule,
    CheckboxModule, DialogModule, MessagesModule, GrowlModule,
    PanelModule, CalendarModule, RadioButtonModule, InputSwitchModule,
    SelectButtonModule, DataTableModule, DataListModule,
    SplitButtonModule, ButtonModule, DropdownModule, AccordionModule,
    ProgressBarModule, ConfirmDialogModule,
    TooltipModule, jqxKanbanComponent
  ],
  entryComponents:[ExportCSVDialogComponent,SendemailDialogComponent,UploadvouchersComponent,AddvochersComponent,AdditionsofvochersComponent],
  declarations: [jqxKanbanComponent, ExportCSVDialogComponent, SendemailDialogComponent, AddvochersComponent, AdditionsofvochersComponent, UploadvouchersComponent],
  providers : [StyleManager]
})
export class SharedModule { }
