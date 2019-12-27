import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-attorney',
  templateUrl: './add-attorney.component.html',
  styleUrls: ['./add-attorney.component.scss']
})
export class AddAttorneyComponent implements OnInit {

  addAttorneyForm: FormGroup;
  public phoneNumberMask = ['+','1', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(public alertService: AlertService,public fb: FormBuilder,public dialogRef: MatDialogRef<AddAttorneyComponent>,@Inject(MAT_DIALOG_DATA) public attornies: any) {
    this.createAttorneyForm();
   }

  ngOnInit() {
  }

  get attorney() {return this.addAttorneyForm.get('attorney'); }

  get state() {return this.addAttorneyForm.get('state'); }

  get city() {return this.addAttorneyForm.get('city'); }

  get status() {return this.addAttorneyForm.get('status'); }

  get faxNumber() { return this.addAttorneyForm.get('faxNumber'); }

  get address() { return this.addAttorneyForm.get('address'); }

  get phone() { return this.addAttorneyForm.get('phone'); }

  get emailId() { return this.addAttorneyForm.get('emailId'); }

  createAttorneyForm() {
    this.addAttorneyForm = this.fb.group({
      attorney : new FormControl('',[Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
      faxNumber : new FormControl('',[Validators.required, Validators.maxLength(15),this.noWhiteSpaceValidator]),
      status : new FormControl('',[Validators.required, Validators.maxLength(50)]),
      state : new FormControl('',[Validators.required, Validators.maxLength(25)]),
      city : new FormControl('',[Validators.required, Validators.maxLength(25)]),
      address : new FormControl('',[Validators.required,Validators.maxLength(200),this.noWhiteSpaceValidator]),
      phone : new FormControl('',[Validators.required,Validators.maxLength(200),this.noWhiteSpaceValidator]),
      emailId : new FormControl('',[Validators.required,Validators.maxLength(150),this.noWhiteSpaceValidator]),
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  saveAttorney() {
    this.alertService.createAlert('Attorney added successfully', 1);
    this.dialogRef.close();
  }

  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }

}
