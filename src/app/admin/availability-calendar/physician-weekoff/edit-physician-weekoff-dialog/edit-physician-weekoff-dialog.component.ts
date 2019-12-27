import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-physician-weekoff-dialog',
  templateUrl: './edit-physician-weekoff-dialog.component.html',
  styleUrls: ['./edit-physician-weekoff-dialog.component.scss']
})
export class EditPhysicianWeekoffDialogComponent implements OnInit {

  time1 = new Date((new Date().getTime() - 3888000000));
  time2 = new Date((new Date().getTime() - 3888000000));
  selected = 2;
  select = 4;

  constructor(public dialogRef: MatDialogRef<EditPhysicianWeekoffDialogComponent>,@Inject(MAT_DIALOG_DATA) public attorney: any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveTimings() {
    //this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

}
