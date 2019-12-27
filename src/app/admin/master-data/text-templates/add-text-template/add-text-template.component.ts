import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-text-template',
  templateUrl: './add-text-template.component.html',
  styleUrls: ['./add-text-template.component.scss']
})
export class AddTextTemplateComponent implements OnInit {

  addTextTemplateForm : FormGroup;
  public dateTime1: Date;
  public dateTime2: Date;
  //public form:FormGroup;
  currDate = new Date();
  public minDate = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), this.currDate.getDate());

  constructor(public alertService: AlertService,public fb: FormBuilder,public dialogRef: MatDialogRef<AddTextTemplateComponent>,@Inject(MAT_DIALOG_DATA) public order: any) {
    this.createTextTemplateForm();
   }

  ngOnInit() {
  }

  get template() {return this.addTextTemplateForm.get('template'); }

  get diagnosis() {return this.addTextTemplateForm.get('diagnosis'); }

  get status() {return this.addTextTemplateForm.get('status'); }

  get subject() {return this.addTextTemplateForm.get('subject'); }

  get message() {return this.addTextTemplateForm.get('message'); }

  createTextTemplateForm() {
    this.addTextTemplateForm = this.fb.group({
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
    this.alertService.createAlert('Text template added successfully', 1);
    this.dialogRef.close();
  }

  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }

}
