import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-view-patient-cheques-collection',
  templateUrl: './view-patient-cheques-collection.component.html',
  styleUrls: ['./view-patient-cheques-collection.component.scss']
})
export class ViewPatientChequesCollectionComponent implements OnInit {

  tableList:any;
  constructor(public dialogRef: MatDialogRef<ViewPatientChequesCollectionComponent>,@Inject(MAT_DIALOG_DATA) public attorney: any) { }

  ngOnInit() {
    this.tableList = [
      {SNo:1 , receivedDate:"04/25/2019" , amount:"$ 2500" , mop:"Cheque" , referrenceNumber:"101478"},
      {SNo:2 , receivedDate:"04/29/2019" , amount:"$ 900" , mop:"Cheque" , referrenceNumber:"201458"},
      {SNo:3 , receivedDate:"05/10/2019" , amount:"$ 4500" , mop:"Cheque" , referrenceNumber:"631478"},
      {SNo:4 , receivedDate:"05/27/2019" , amount:"$ 100" , mop:"Cheque" , referrenceNumber:"847511"}
    ]
  }

  close(): void {
    this.dialogRef.close();
  }

  saveAttorney() {
    // this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

}
