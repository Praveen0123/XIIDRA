import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-appointment-code',
  templateUrl: './add-appointment-code.component.html',
  styleUrls: ['./add-appointment-code.component.scss']
})
export class AddAppointmentCodeComponent implements OnInit {

  addAppointmentCodeForm: FormGroup;

  constructor(public fb:FormBuilder,public dialogRef: MatDialogRef<AddAppointmentCodeComponent>,@Inject(MAT_DIALOG_DATA) public appointment: any) {
    this.createAppoinmtmentCodeForm();
   }

  ngOnInit() {
    this.initialFunctionCall();
  }

  get appointmentNameCoreHealth() { return this.addAppointmentCodeForm.get('appointmentNameCoreHealth'); }

  get appointmentNameSapphireMD() { return this.addAppointmentCodeForm.get('appointmentNameSapphireMD'); }

  get appointmentNamePainAllieviation() { return this.addAppointmentCodeForm.get('appointmentNamePainAllieviation'); }

  get appointmentNameCentreforPainRelief() { return this.addAppointmentCodeForm.get('appointmentNameCentreforPainRelief'); }

  get appointmentNamePrimeOrthopedics() { return this.addAppointmentCodeForm.get('appointmentNamePrimeOrthopedics'); }

  get description() { return this.addAppointmentCodeForm.get('description'); }

  get duration() { return this.addAppointmentCodeForm.get('duration'); }

  get cptCode1() { return this.addAppointmentCodeForm.get('cptCode1'); }

  get cptCode2() { return this.addAppointmentCodeForm.get('cptCode2'); }

  get cptCode3() { return this.addAppointmentCodeForm.get('cptCode3'); }

  get status() { return this.addAppointmentCodeForm.get('status'); }

  get common() { return this.addAppointmentCodeForm.get('common'); }

  get appointmentName() { return this.addAppointmentCodeForm.get('appointmentName'); }

  createAppoinmtmentCodeForm() {
    this.addAppointmentCodeForm = this.fb.group({
      appointmentNameCoreHealth : new FormControl(null),
      appointmentNameSapphireMD : new FormControl(null),
      appointmentNamePainAllieviation : new FormControl(null),
      appointmentNameCentreforPainRelief : new FormControl(null),
      appointmentNamePrimeOrthopedics : new FormControl(null),
      description : new FormControl('',[Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
      duration : new FormControl('',[Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
      cptCode1 : new FormControl('',[Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
      cptCode2 : new FormControl(''),
      cptCode3 : new FormControl(''),
      appointmentName : new FormControl(null),
      common: new FormControl(''),
      status : new FormControl('',[Validators.required, Validators.maxLength(10)]),
    })
  }

  close(): void {
    this.dialogRef.close();
    
  }

  saveCpt() {
    //this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

  checkBoxChecked() {
    if(this.addAppointmentCodeForm.value.common) {
      this.addAppointmentCodeForm.controls['appointmentName'].setValidators(Validators.compose([Validators.required]));
      this.addAppointmentCodeForm.controls['appointmentName'].updateValueAndValidity();
      this.addAppointmentCodeForm.controls['appointmentNameCoreHealth'].setValidators(null);
      this.addAppointmentCodeForm.controls['appointmentNameCoreHealth'].updateValueAndValidity();
      this.addAppointmentCodeForm.controls['appointmentNameSapphireMD'].setValidators(null);
      this.addAppointmentCodeForm.controls['appointmentNameSapphireMD'].updateValueAndValidity();
      this.addAppointmentCodeForm.controls['appointmentNamePainAllieviation'].setValidators(null);
      this.addAppointmentCodeForm.controls['appointmentNamePainAllieviation'].updateValueAndValidity();
      this.addAppointmentCodeForm.controls['appointmentNameCentreforPainRelief'].setValidators(null);
      this.addAppointmentCodeForm.controls['appointmentNameCentreforPainRelief'].updateValueAndValidity();
      this.addAppointmentCodeForm.controls['appointmentNamePrimeOrthopedics'].setValidators(null);
      this.addAppointmentCodeForm.controls['appointmentNamePrimeOrthopedics'].updateValueAndValidity();
      
    }
    else {
      this.addAppointmentCodeForm.controls['appointmentName'].setValidators(null);
      this.addAppointmentCodeForm.controls['appointmentName'].updateValueAndValidity();
    }
  }

  initialFunctionCall() {
      this.addAppointmentCodeForm.controls['appointmentNameCoreHealth'].setValidators(Validators.compose([Validators.required]));
      this.addAppointmentCodeForm.controls['appointmentNameCoreHealth'].updateValueAndValidity();
      this.addAppointmentCodeForm.controls['appointmentNameSapphireMD'].setValidators(Validators.compose([Validators.required]));
      this.addAppointmentCodeForm.controls['appointmentNameSapphireMD'].updateValueAndValidity();
      this.addAppointmentCodeForm.controls['appointmentNamePainAllieviation'].setValidators(Validators.compose([Validators.required]));
      this.addAppointmentCodeForm.controls['appointmentNamePainAllieviation'].updateValueAndValidity();
      this.addAppointmentCodeForm.controls['appointmentNameCentreforPainRelief'].setValidators(Validators.compose([Validators.required]));
      this.addAppointmentCodeForm.controls['appointmentNameCentreforPainRelief'].updateValueAndValidity();
      this.addAppointmentCodeForm.controls['appointmentNamePrimeOrthopedics'].setValidators(Validators.compose([Validators.required]));
      this.addAppointmentCodeForm.controls['appointmentNamePrimeOrthopedics'].updateValueAndValidity();
  }

  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }

}
