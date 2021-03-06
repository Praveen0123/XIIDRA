import { Component, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';


@Component({
  selector: 'app-addvochers',
  templateUrl: './addvochers.component.html',
  styleUrls: ['./addvochers.component.scss']
})
export class AddvochersComponent implements OnInit {
  public dateTime1: Date;
  public dateTime2: Date;
  incomingOrderForm: FormGroup;
  //public form:FormGroup;
  currDate = new Date();
  public minDate = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), this.currDate.getDate());
  constructor(public dialogRef: MatDialogRef<AddvochersComponent>,
    public alertService : AlertService,
    public fb : FormBuilder) { }

  ngOnInit() {
  }
  get addFirstName() { return this.incomingOrderForm.get('addFirstName'); }

  get addLastName() { return this.incomingOrderForm.get('addLastName'); }

  get addDob() { return this.incomingOrderForm.get('addDob'); }

  get addReferringPhysician() { return this.incomingOrderForm.get('addReferringPhysician'); }

  get addReceivedDate() { return this.incomingOrderForm.get('addReceivedDate'); }

  addIncomingOrderForm() {
    this.incomingOrderForm = this.fb.group({
      addFirstName: new FormControl('', [Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
      addLastName: new FormControl('', [Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
      addDob: new FormControl('', [Validators.maxLength(50)]),
      addReferringPhysician: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      addReceivedDate: new FormControl('', [Validators.maxLength(50)])
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }

  saveOrder() {
    this.alertService.createAlert('Patient added successfully.', 1);
    this.dialogRef.close();
  }

}
