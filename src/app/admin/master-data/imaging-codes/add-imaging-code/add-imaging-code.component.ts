import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-imaging-code',
  templateUrl: './add-imaging-code.component.html',
  styleUrls: ['./add-imaging-code.component.scss']
})
export class AddImagingCodeComponent implements OnInit {

  addImagingCodeForm: FormGroup

  constructor(public fb:FormBuilder,public alertService : AlertService,public dialogRef: MatDialogRef<AddImagingCodeComponent>,@Inject(MAT_DIALOG_DATA) public imagingCode: any) {
    this.createImagingCodeForm();
   }

  ngOnInit() {
  }

  get imagingCodes() { return this.addImagingCodeForm.get('imagingCodes'); }

  get imagingName() { return this.addImagingCodeForm.get('imagingName'); }

  get description() { return this.addImagingCodeForm.get('description'); }

  get cptCode1() { return this.addImagingCodeForm.get('cptCode1'); }

  get cptCode2() { return this.addImagingCodeForm.get('cptCode2'); }

  get cptCode3() { return this.addImagingCodeForm.get('cptCode3'); }

  get status() { return this.addImagingCodeForm.get('status'); }

  
  createImagingCodeForm() {
    this.addImagingCodeForm = this.fb.group({
      imagingCodes : new FormControl('',[Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
      imagingName : new FormControl('',[Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
      description : new FormControl('',[Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
      cptCode1 : new FormControl('',[Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
      cptCode2 : new FormControl(''),
      cptCode3 : new FormControl(''),
      status : new FormControl('',[Validators.required, Validators.maxLength(10)]),
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  saveImagingCode() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }

}
