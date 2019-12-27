import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-visit-status',
  templateUrl: './add-visit-status.component.html',
  styleUrls: ['./add-visit-status.component.scss']
})
export class AddVisitStatusComponent implements OnInit {

  addWorklistForm: FormGroup;

  constructor(public alertService: AlertService,public fb: FormBuilder,public dialogRef: MatDialogRef<AddVisitStatusComponent>,@Inject(MAT_DIALOG_DATA) public addvisit: any) {
    this.createWorklistStatusForm();
   }

  ngOnInit() {
  }

  get worklistStatus() {return this.addWorklistForm.get('worklistStatus'); }

  get status() {return this.addWorklistForm.get('status'); }

  createWorklistStatusForm() {
    this.addWorklistForm = this.fb.group({
      worklistStatus : new FormControl('',[Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
      status : new FormControl('',[Validators.required, Validators.maxLength(50)]),
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  saveVisit() {
    this.alertService.createAlert('Worklist status added successfully', 1);
    this.dialogRef.close();
  }

  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }

}
