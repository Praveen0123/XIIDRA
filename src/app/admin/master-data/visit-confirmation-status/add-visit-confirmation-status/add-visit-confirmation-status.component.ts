import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-visit-confirmation-status',
  templateUrl: './add-visit-confirmation-status.component.html',
  styleUrls: ['./add-visit-confirmation-status.component.scss']
})
export class AddVisitConfirmationStatusComponent implements OnInit {

  addVisitConfirmationStatusForm: FormGroup;

  constructor(public alertService: AlertService,public fb: FormBuilder,public dialogRef: MatDialogRef<AddVisitConfirmationStatusComponent>,@Inject(MAT_DIALOG_DATA) public addconfirmationvisit: any) {
    this.createVisitConfirmationStatusForm();
   }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  get visitConfrimation() {return this.addVisitConfirmationStatusForm.get('visitConfrimation'); }

  get status() {return this.addVisitConfirmationStatusForm.get('status'); }

  createVisitConfirmationStatusForm() {
    this.addVisitConfirmationStatusForm = this.fb.group({
      visitConfrimation : new FormControl('',[Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
      status : new FormControl('',[Validators.required, Validators.maxLength(50)]),
    })
  }

  saveVisit() {
    this.alertService.createAlert('Visit confirmation status added successfully', 1);
    this.dialogRef.close();
  }

  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }

}
