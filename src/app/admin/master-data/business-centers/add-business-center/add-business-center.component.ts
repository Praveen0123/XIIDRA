import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-business-center',
  templateUrl: './add-business-center.component.html',
  styleUrls: ['./add-business-center.component.scss']
})
export class AddBusinessCenterComponent implements OnInit {

  addBusinessCenterForm: FormGroup;
  public phoneNumberMask = ['+','1', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(public alertService: AlertService,public fb: FormBuilder,public dialogRef: MatDialogRef<AddBusinessCenterComponent>,@Inject(MAT_DIALOG_DATA) public business: any) {
    this.createBusinessCenterForm();
   }

  ngOnInit() {
  }

  get businessCenter() {return this.addBusinessCenterForm.get('businessCenter'); }

  get state() {return this.addBusinessCenterForm.get('state'); }

  get city() {return this.addBusinessCenterForm.get('city'); }

  get status() {return this.addBusinessCenterForm.get('status'); }

  get faxNumber() { return this.addBusinessCenterForm.get('faxNumber'); }

  get address() { return this.addBusinessCenterForm.get('address'); }

  get phone() { return this.addBusinessCenterForm.get('phone'); }

  get emailId() { return this.addBusinessCenterForm.get('emailId'); }

  createBusinessCenterForm() {
    this.addBusinessCenterForm = this.fb.group({
      businessCenter : new FormControl('',[Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
      faxNumber : new FormControl('',[Validators.required,Validators.maxLength(100),this.noWhiteSpaceValidator]),
      state : new FormControl('',[Validators.required, Validators.maxLength(25)]),
      city : new FormControl('',[Validators.required, Validators.maxLength(25)]),
      status : new FormControl('',[Validators.required, Validators.maxLength(10)]),
      address : new FormControl('',[Validators.required,Validators.maxLength(200),this.noWhiteSpaceValidator]),
      phone : new FormControl('',[Validators.required,Validators.maxLength(200),this.noWhiteSpaceValidator]),
      emailId : new FormControl('',[Validators.required,Validators.maxLength(150),this.noWhiteSpaceValidator]),
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  saveBusiness() {
    this.alertService.createAlert('Business center added successfully.', 1);
    this.dialogRef.close();
  }

  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }


}
