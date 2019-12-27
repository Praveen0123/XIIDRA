import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-claim-status',
  templateUrl: './add-claim-status.component.html',
  styleUrls: ['./add-claim-status.component.scss']
})
export class AddClaimStatusComponent implements OnInit {

  addClaimStatusForm : FormGroup;

  constructor(public alertService: AlertService,public fb: FormBuilder,public dialogRef: MatDialogRef<AddClaimStatusComponent>,@Inject(MAT_DIALOG_DATA) public addclaim: any) {
    this.createClaimStatusForm()
   }

  ngOnInit() {
  }

  get claimStatus() {return this.addClaimStatusForm.get('claimStatus'); }

  get status() {return this.addClaimStatusForm.get('status'); }

  createClaimStatusForm() {
    this.addClaimStatusForm = this.fb.group({
      claimStatus : new FormControl('',[Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
      status : new FormControl('',[Validators.required, Validators.maxLength(10)])
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  saveClaim() {
    this.alertService.createAlert('Claim status added successfully', 1);
    this.dialogRef.close();
  }

  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }


}
