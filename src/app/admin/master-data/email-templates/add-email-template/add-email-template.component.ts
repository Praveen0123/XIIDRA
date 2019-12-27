import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-email-template',
  templateUrl: './add-email-template.component.html',
  styleUrls: ['./add-email-template.component.scss']
})
export class AddEmailTemplateComponent implements OnInit {

  addEmailTemplateForm : FormGroup;
  public dateTime1: Date;
  public dateTime2: Date;
  //public form:FormGroup;
  currDate = new Date();
  public minDate = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), this.currDate.getDate());

  constructor(public alertService: AlertService,public fb: FormBuilder,public dialogRef: MatDialogRef<AddEmailTemplateComponent>,@Inject(MAT_DIALOG_DATA) public order: any) {
    this.createEmailTemplateForm();
   }

  ngOnInit() {
  }

  get template() {return this.addEmailTemplateForm.get('template'); }

  get diagnosis() {return this.addEmailTemplateForm.get('diagnosis'); }

  get status() {return this.addEmailTemplateForm.get('status'); }

  get subject() {return this.addEmailTemplateForm.get('subject'); }

  get message() {return this.addEmailTemplateForm.get('message'); }

  createEmailTemplateForm() {
    this.addEmailTemplateForm = this.fb.group({
      template : new FormControl('',[Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
      diagnosis : new FormControl('',[Validators.required, Validators.maxLength(10)]),
      status : new FormControl('',[Validators.required, Validators.maxLength(10)]),
      subject : new FormControl('',[Validators.required, Validators.maxLength(10),this.noWhiteSpaceValidator]),
      message : new FormControl('',[Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  saveOrder() {
    this.alertService.createAlert('Email template added successfully', 1);
    this.dialogRef.close();
  }

  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }

}
