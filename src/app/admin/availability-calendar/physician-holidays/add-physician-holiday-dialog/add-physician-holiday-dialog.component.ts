import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../../shared/services/alert.service';


@Component({
  selector: 'app-add-physician-holiday-dialog',
  templateUrl: './add-physician-holiday-dialog.component.html',
  styleUrls: ['./add-physician-holiday-dialog.component.scss']
})
export class AddPhysicianHolidayDialogComponent implements OnInit {

  addphysicianForm:FormGroup;

  constructor(public alertService: AlertService,public fb: FormBuilder,public dialogRef: MatDialogRef<AddPhysicianHolidayDialogComponent>,@Inject(MAT_DIALOG_DATA) public order: any) { 
    this.CreateaddHolidayForm()
  }

  ngOnInit() {
  }
  get Business() {return this.addphysicianForm.get('Business');}
  get Physician(){ return this.addphysicianForm.get('Physician');}
  get date() {return this.addphysicianForm.get("date");}

  CreateaddHolidayForm(){
    this.addphysicianForm =this.fb.group({
      Business: new FormControl("",[ Validators.required,Validators.maxLength(50)]),
      Physician: new FormControl("",[ Validators.required,Validators.maxLength(50)]),
       date: new FormControl("",[Validators.required,Validators.maxLength(50)]),
       
    })

  }
    
  close(): void {
    this.dialogRef.close();
  }

  saveHoliday() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

}