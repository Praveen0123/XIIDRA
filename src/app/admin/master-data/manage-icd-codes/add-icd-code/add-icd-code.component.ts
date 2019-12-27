import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../../shared/services/alert.service';


@Component({
  selector: 'app-add-icd-code',
  templateUrl: './add-icd-code.component.html',
  styleUrls: ['./add-icd-code.component.scss']
})
export class AddIcdCodeComponent implements OnInit {

  addICDCodeForm: FormGroup;

  constructor(public alertService: AlertService,public fb: FormBuilder,public dialogRef: MatDialogRef<AddIcdCodeComponent>,@Inject(MAT_DIALOG_DATA) public icd: any) {
    this.createICDForm();
   }

  ngOnInit() {
  }

  get ICDCode() {return this.addICDCodeForm.get('ICDCode'); }

  get description() {return this.addICDCodeForm.get('description'); }

  get status() {return this.addICDCodeForm.get('status'); }

  createICDForm() {
    this.addICDCodeForm = this.fb.group({
      ICDCode : new FormControl('',[Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
      description : new FormControl('',[Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
      status : new FormControl('',[Validators.required, Validators.maxLength(50)]),
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  saveIcd() {
    this.alertService.createAlert('ICD code added successfully', 1);
    this.dialogRef.close();
  }

  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }


}
