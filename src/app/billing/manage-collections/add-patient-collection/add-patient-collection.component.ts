import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-add-patient-collection',
  templateUrl: './add-patient-collection.component.html',
  styleUrls: ['./add-patient-collection.component.scss']
})
export class AddPatientCollectionComponent implements OnInit {

  addCollectionForm:FormGroup;

  constructor(private cdref: ChangeDetectorRef,public alertService: AlertService,public fb:FormBuilder,public dialogRef: MatDialogRef<AddPatientCollectionComponent>,@Inject(MAT_DIALOG_DATA) public attorney: any) {
    this.createCollectionForm();
   }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  ngOnInit() {
  }

  get MOP() { return this.addCollectionForm.get('MOP'); }

  get PRN() { return this.addCollectionForm.get('PRN'); }

  get receivedAmount() { return this.addCollectionForm.get('receivedAmount'); }

  createCollectionForm() {
    this.addCollectionForm = this.fb.group({
      MOP : new FormControl('',[Validators.required, Validators.maxLength(10)]),
      PRN : new FormControl(''),
      receivedAmount : new FormControl(''),
    })
  }


  close(): void {
    this.dialogRef.close();
  }

  saveAttorney() {
    this.alertService.createAlert('Collection added successfully', 1);
    this.dialogRef.close();
  }

  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }

}
