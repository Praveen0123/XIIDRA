import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../../../shared/services/alert.service';
import { emailValidator } from 'src/app/theme/utils/app-validators';

@Component({
  selector: 'app-add-incoming-order',
  templateUrl: './add-incoming-order.component.html',
  styleUrls: ['./add-incoming-order.component.scss']
})
export class AddIncomingOrderComponent implements OnInit {

  public dateTime1: Date;
  public dateTime2: Date;
  incomingOrderForm: FormGroup;
  //public form:FormGroup;
  currDate = new Date();
  public minDate = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), this.currDate.getDate());

  constructor(public alertService : AlertService,public dialogRef: MatDialogRef<AddIncomingOrderComponent>,public fb : FormBuilder,@Inject(MAT_DIALOG_DATA) public order: any) { 
    this.addIncomingOrderForm();
  }

  ngOnInit() {
  }
  get addCountryCode() { return this.incomingOrderForm.get('addCountryCode'); }
  get addEmail() { return this.incomingOrderForm.get('addEmail'); }
  get addTerritory() { return this.incomingOrderForm.get('addTerritory'); }


  get addLastName() { return this.incomingOrderForm.get('addLastName'); }
  get addmiddleName() { return this.incomingOrderForm.get('addmiddleName'); }
  get addfirstName() { return this.incomingOrderForm.get('addfirstName'); }

 
  get Address1() { return this.incomingOrderForm.get('Address1'); }

  get Address2() { return this.incomingOrderForm.get('Address2'); }
  get Address3() { return this.incomingOrderForm.get('Address3'); }

   get addCity() { return this.incomingOrderForm.get('addCity'); }
   get addProvince() { return this.incomingOrderForm.get('addProvince'); }
   get addPOSTALCODE() { return this.incomingOrderForm.get('addPOSTALCODE'); }
   get addCountry() { return this.incomingOrderForm.get('addCountry'); }
   get addSpecialty() { return this.incomingOrderForm.get('addSpecialty'); }

  addIncomingOrderForm() {
    this.incomingOrderForm = this.fb.group({
      addCountryCode: new FormControl(''),
      addEmail: new FormControl('', [Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
      addfirstName: new FormControl('', [Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
      addLastName: new FormControl('', [Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
      addmiddleName: new FormControl(''),
      addTerritory: new FormControl('', [Validators.maxLength(50)]),
      Address1: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      Address2: new FormControl(''),
      Address3: new FormControl(''),
      addCity: new FormControl('', [Validators.maxLength(50)]),
      addProvince: new FormControl('', [Validators.maxLength(50)]),
      addPOSTALCODE: new FormControl('', [Validators.maxLength(6)]),
      addCountry: new FormControl('', [Validators.maxLength(50)]),
      addSpecialty: new FormControl('', [Validators.maxLength(10)]),
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

  saveOrder() {
    this.alertService.createAlert('Patient added successfully.', 1);
    this.dialogRef.close();
  }

}
