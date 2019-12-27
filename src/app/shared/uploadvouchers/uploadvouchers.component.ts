import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-uploadvouchers',
  templateUrl: './uploadvouchers.component.html',
  styleUrls: ['./uploadvouchers.component.scss']
})
export class UploadvouchersComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UploadvouchersComponent>,
    public alertService : AlertService,
    public fb : FormBuilder,) { }

  ngOnInit() {
  }
  saveOrder() {
    this.alertService.createAlert('vochersData added successfully.', 1);
    this.dialogRef.close();
  }
  
  close(): void {
    this.dialogRef.close();
  }

  
}
