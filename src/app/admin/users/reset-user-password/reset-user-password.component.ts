import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MustMatch } from '../../../shared/services/mustMatch';

@Component({
  selector: 'app-reset-user-password',
  templateUrl: './reset-user-password.component.html',
  styleUrls: ['./reset-user-password.component.scss']
})
export class ResetUserPasswordComponent implements OnInit {

  changePasswordForm: FormGroup;
  isOneLetter = false;
  isOneCapitalLetter = false;
  isOneNumber = false;
  isOneSpecialCaharacter = false;
  isMinLength = false;
  isValidate = false;
  currentUser: any;
  show: boolean;
  shown: boolean;
  public TypeStringInNewPassword:string="password";
  public TypeStringInConfirmPassword:string="password";
  public isPassword:boolean=true;

  constructor(
    public dialogRef: MatDialogRef<ResetUserPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public course: any, private fb: FormBuilder, private alertService: AlertService) {
    this.createPasswordForm();
    this.show = false;
    this.shown = false;
  }

  get userNewPassword() { return this.changePasswordForm.get('userNewPassword'); };

  get userNewReenterPassword() { return this.changePasswordForm.get('userNewReenterPassword'); };

  ngOnInit() {
    this.changePasswordForm.controls['uniqueId'].setValue(1012102);
  }

  createPasswordForm() {
    this.changePasswordForm = this.fb.group({
      uniqueId: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      userNewPassword: new FormControl('', [Validators.required, Validators.maxLength(30), this.noWhiteSpaceValidator]),
      userNewReenterPassword: new FormControl('', [Validators.required, Validators.maxLength(30), this.noWhiteSpaceValidator]),
    }, {
        validator: MustMatch('userNewPassword', 'userNewReenterPassword')
      });
  }

  updatePassword() {
    this.alertService.createAlert('Successfully saved ',1)
    this.dialogRef.close();
  }

  onKeyPress(e) {
    var pswd = e.value;
    //validate the length
    if (pswd.length < 8) {
      this.isMinLength = false;
    } else {
      this.isMinLength = true;
    }

    //validate letter
    if (pswd.match(/[A-z]/)) {
      if (pswd != '_') {
        this.isOneLetter = true;
      } else {
        this.isOneLetter = false;
      }
    } else {
      this.isOneLetter = false;
    }

    //validate uppercase letter
    if (pswd.match(/[A-Z]/)) {
      this.isOneCapitalLetter = true;
    } else {
      this.isOneCapitalLetter = false;
    }

    //validate special character
    if (pswd.match(/[!@#\$%\^&\_\+\<\>\.\,\=\:\;\'\?\(\)\[\]\\\/\|\*{}-]/)) {
      this.isOneSpecialCaharacter = true;
    } else {
      this.isOneSpecialCaharacter = false;
    }

    //validate number
    if (pswd.match(/\d/)) {
      this.isOneNumber = true;
    } else {
      this.isOneNumber = false;
    }

  }

  noWhiteSpaceValidator(control: FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid = !isWhiteSpace;
    return isValid ? null : { 'whitespace': true };
  }


  close(): void {
    this.dialogRef.close();
  }

  
  
  public ChangetextTypeInConfirmPassword(isPassword){
    if(isPassword){
      this.TypeStringInConfirmPassword="password"
    }else{
      this.TypeStringInConfirmPassword="text"
    }
  }
  
  public ChangetextTypeInNewPassword(isPassword){
    if(isPassword){
      this.TypeStringInNewPassword="password"
    }else{
      this.TypeStringInNewPassword="text"
    }
  }

}
