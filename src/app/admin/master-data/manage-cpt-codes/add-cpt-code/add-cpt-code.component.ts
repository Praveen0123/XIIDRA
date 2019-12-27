import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../../shared/services/alert.service';


@Component({
  selector: 'app-add-cpt-code',
  templateUrl: './add-cpt-code.component.html',
  styleUrls: ['./add-cpt-code.component.scss']
})
export class AddCptCodeComponent implements OnInit {

  addCPTCodeForm: FormGroup;

  constructor(public alertService: AlertService,public fb: FormBuilder,public dialogRef: MatDialogRef<AddCptCodeComponent>,@Inject(MAT_DIALOG_DATA) public cpt: any) {
    this.createCPTForm();
   }

  ngOnInit() {
  }

  get cptCode() {return this.addCPTCodeForm.get('cptCode'); }

  get description() {return this.addCPTCodeForm.get('description'); }

  get coreHealth() {return this.addCPTCodeForm.get('coreHealth'); }

  get sapphireMD() {return this.addCPTCodeForm.get('sapphireMD'); }

  get painAllieviation() {return this.addCPTCodeForm.get('painAllieviation'); }

  get centerForPainRelief() {return this.addCPTCodeForm.get('centerForPainRelief'); }

  get primeOrthopedics() {return this.addCPTCodeForm.get('primeOrthopedics'); }

  get status() {return this.addCPTCodeForm.get('status'); }

  createCPTForm() {
    this.addCPTCodeForm = this.fb.group({
      cptCode : new FormControl('',[Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
      description : new FormControl('',[Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
      coreHealth : new FormControl('',[Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
      sapphireMD : new FormControl('',[Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
      painAllieviation : new FormControl('',[Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
      centerForPainRelief : new FormControl('',[Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
      primeOrthopedics : new FormControl('',[Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
      status : new FormControl('',[Validators.required, Validators.maxLength(50)]),
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  saveCpt() {
    this.alertService.createAlert('CPT code added successfully', 1);
    this.dialogRef.close();
  }

  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }

}
