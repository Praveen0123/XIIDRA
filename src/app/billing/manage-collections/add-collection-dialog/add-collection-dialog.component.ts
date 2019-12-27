import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-add-collection-dialog',
  templateUrl: './add-collection-dialog.component.html',
  styleUrls: ['./add-collection-dialog.component.scss']
})
export class AddCollectionDialogComponent implements OnInit {

  addCollectionForm:FormGroup;

  constructor(public alertService: AlertService,public fb:FormBuilder,public dialogRef: MatDialogRef<AddCollectionDialogComponent>,@Inject(MAT_DIALOG_DATA) public attornies: any) {
    this.createCollectionForm();
   }

  ngOnInit() {
  }

  get attorney() { return this.addCollectionForm.get('attorney'); }

  get patient() { return this.addCollectionForm.get('patient'); }

  get MOP() { return this.addCollectionForm.get('MOP'); }

  get PRN() { return this.addCollectionForm.get('PRN'); }

  get receivedAmount() { return this.addCollectionForm.get('receivedAmount'); }

  get proof() { return this.addCollectionForm.get('proof'); }

  createCollectionForm() {
    this.addCollectionForm = this.fb.group({
      attorney : new FormControl('',[Validators.required,Validators.maxLength(50)]),
      patient : new FormControl('',[Validators.required, Validators.maxLength(10)]),
      MOP : new FormControl('',[Validators.required, Validators.maxLength(10)]),
      proof: new FormControl(''),
      PRN : new FormControl(''),
      receivedAmount : new FormControl('',[Validators.required,Validators.maxLength(50),this.noWhiteSpaceValidator]),
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
