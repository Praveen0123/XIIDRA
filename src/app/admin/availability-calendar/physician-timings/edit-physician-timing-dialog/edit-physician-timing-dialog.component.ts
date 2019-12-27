import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';

@Component({
  selector: 'app-edit-physician-timing-dialog',
  templateUrl: './edit-physician-timing-dialog.component.html',
  styleUrls: ['./edit-physician-timing-dialog.component.scss']
})
export class EditPhysicianTimingDialogComponent implements OnInit {

  time1 = new Date((new Date().getTime() - 3888000000));
  time2 = new Date((new Date().getTime() - 3888000000));
  time3 = new Date((new Date().getTime() - 3888000000));
  time4 = new Date((new Date().getTime() - 3888000000));
  SundayChecked:boolean = true;
  MondayChecked:boolean = false;
  TuesdayChecked:boolean = false;
  WednesdayChecked:boolean = false;
  ThursdayChecked:boolean = true;
  FridayChecked:boolean = true;
  SaturdayChecked:boolean = true;

  constructor(public alertService:AlertService,public dialogRef: MatDialogRef<EditPhysicianTimingDialogComponent>,@Inject(MAT_DIALOG_DATA) public attorney: any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveTimings() {
    this.alertService.createAlert('Physician timings updated successfully.', 1);
    this.dialogRef.close();
  }


}
