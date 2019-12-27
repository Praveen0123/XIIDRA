import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ReturnStatement } from '@angular/compiler';
import { AlertService } from '../../../../shared/services/alert.service';


@Component({
  selector: 'app-add-physician-special-case',
  templateUrl: './add-physician-special-case.component.html',
  styleUrls: ['./add-physician-special-case.component.scss']
})
export class AddPhysicianSpecialCaseComponent implements OnInit {

  addPhysicianForm:FormGroup;

  constructor(public alertService:AlertService,public fb:FormBuilder,public dialogRef: MatDialogRef<AddPhysicianSpecialCaseComponent>,@Inject(MAT_DIALOG_DATA) public specialCase: any) {
    this.createSpecialCaseForm();
   }

  ngOnInit() {
  }
 
  close():void{
    this.dialogRef.close();
  }

  get businessCenter() { return this.addPhysicianForm.get('businessCenter'); }

  get physician() { return this.addPhysicianForm.get('physician'); }

  get date() { return this.addPhysicianForm.get('date'); }

  get startTime() { return this.addPhysicianForm.get('startTime'); }

  get endTime() { return this.addPhysicianForm.get('endTime'); }v

  createSpecialCaseForm() {
    this.addPhysicianForm = this.fb.group({
      businessCenter : new FormControl('',[Validators.required , Validators.maxLength(150)]),
      physician : new FormControl('',[Validators.required , Validators.maxLength(150)]),
      date : new FormControl('',[Validators.required]),
      startTime : new FormControl('',[Validators.required]),
      endTime : new FormControl('',[Validators.required]),
    })
  }

 saveSpecialCase() {
   this.dialogRef.close();
   this.alertService.createAlert('Successfully saved',1);
 }


}
