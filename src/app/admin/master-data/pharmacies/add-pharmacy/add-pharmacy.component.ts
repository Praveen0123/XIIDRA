import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-pharmacy',
  templateUrl: './add-pharmacy.component.html',
  styleUrls: ['./add-pharmacy.component.scss']
})
export class AddPharmacyComponent implements OnInit {

  addPharmacyForm:FormGroup;
  public phoneNumberMask = ['+','1', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  get pharmacy() { return this.addPharmacyForm.get('pharmacy'); }

  get faxNumber() { return this.addPharmacyForm.get('faxNumber'); }

  get city() { return this.addPharmacyForm.get('city'); }

  get state() { return this.addPharmacyForm.get('state'); }

  get address() { return this.addPharmacyForm.get('address'); }

  get emailId() { return this.addPharmacyForm.get('emailId'); }

  get contactNumber() { return this.addPharmacyForm.get('contactNumber'); }

  get status() { return this.addPharmacyForm.get('status'); }

  constructor(public fb:FormBuilder,public alertService:AlertService,public dialogRef: MatDialogRef<AddPharmacyComponent>,@Inject(MAT_DIALOG_DATA) public pharmacies: any) { 
    this.createPharmacyForm();
  }

  ngOnInit() {
  }

  createPharmacyForm() {
    this.addPharmacyForm = this.fb.group({
      pharmacy : new FormControl('',[Validators.required,Validators.maxLength(100),this.noWhiteSpaceValidator]),
      faxNumber : new FormControl('',[Validators.required,Validators.maxLength(100),this.noWhiteSpaceValidator]),
      state : new FormControl('',[Validators.required,Validators.maxLength(200)]),
      city : new FormControl('',[Validators.required,Validators.maxLength(200)]),
      address : new FormControl('',[Validators.required,Validators.maxLength(200),this.noWhiteSpaceValidator]),
      emailId : new FormControl('',[Validators.required,Validators.maxLength(150),this.noWhiteSpaceValidator]),
      contactNumber : new FormControl('',[Validators.required,Validators.maxLength(100),this.noWhiteSpaceValidator]),
      status : new FormControl('',[Validators.required,Validators.maxLength(200)]),
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  savePharmacy() {
    this.alertService.createAlert('Pharmacy added successfully', 1);
    this.dialogRef.close();
  }

  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }

}
