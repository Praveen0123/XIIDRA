import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-i-partner',
  templateUrl: './add-i-partner.component.html',
  styleUrls: ['./add-i-partner.component.scss']
})
export class AddIPartnerComponent implements OnInit {

  addImagingPartnerForm:FormGroup;
  public phoneNumberMask = ['+','1', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  get imagingPartner() { return this.addImagingPartnerForm.get('imagingPartner'); }

  get faxNumber() { return this.addImagingPartnerForm.get('faxNumber'); }

  get city() { return this.addImagingPartnerForm.get('city'); }

  get state() { return this.addImagingPartnerForm.get('state'); }

  get address() { return this.addImagingPartnerForm.get('address'); }

  get phone() { return this.addImagingPartnerForm.get('phone'); }

  get emailId() { return this.addImagingPartnerForm.get('emailId'); }

  get status() { return this.addImagingPartnerForm.get('status'); }

  constructor(public fb:FormBuilder,public alertService:AlertService,public dialogRef: MatDialogRef<AddIPartnerComponent>,@Inject(MAT_DIALOG_DATA) public partner: any) {
    this.createImagingPartnerForm();
   }

  ngOnInit() {
  }

  createImagingPartnerForm() {
    this.addImagingPartnerForm = this.fb.group({
      imagingPartner : new FormControl('',[Validators.required,Validators.maxLength(100),this.noWhiteSpaceValidator]),
      faxNumber : new FormControl('',[Validators.required,Validators.maxLength(100),this.noWhiteSpaceValidator]),
      state : new FormControl('',[Validators.required,Validators.maxLength(200)]),
      city : new FormControl('',[Validators.required,Validators.maxLength(200)]),
      address : new FormControl('',[Validators.required,Validators.maxLength(200),this.noWhiteSpaceValidator]),
      phone : new FormControl('',[Validators.required,Validators.maxLength(200),this.noWhiteSpaceValidator]),
      emailId : new FormControl('',[Validators.required,Validators.maxLength(150),this.noWhiteSpaceValidator]),
      status : new FormControl('',[Validators.required,Validators.maxLength(200)]),
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

  savePartner() {
    this.alertService.createAlert('Imaging partner added successfully', 1);
    this.dialogRef.close();
  }


}
