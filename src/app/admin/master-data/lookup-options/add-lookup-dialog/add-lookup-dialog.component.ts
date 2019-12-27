import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-lookup-dialog',
  templateUrl: './add-lookup-dialog.component.html',
  styleUrls: ['./add-lookup-dialog.component.scss']
})
export class AddLookupDialogComponent implements OnInit {

  addLookupForm: FormGroup;

  constructor(public alertService: AlertService,public fb: FormBuilder,public dialogRef: MatDialogRef<AddLookupDialogComponent>,@Inject(MAT_DIALOG_DATA) public lookupOption: any) {
    this.createLookupForm();
   }

  ngOnInit() {
  }

  get lookup() {return this.addLookupForm.get('lookup'); }

  get status() {return this.addLookupForm.get('status'); }

  createLookupForm() {
    this.addLookupForm = this.fb.group({
      lookup : new FormControl('',[Validators.required, Validators.maxLength(50),this.noWhiteSpaceValidator]),
      status : new FormControl('',[Validators.required, Validators.maxLength(50)]),
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  saveAttorney() {
    this.alertService.createAlert('Lookup added successfully', 1);
    this.dialogRef.close();
  }

  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }


}
