import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material';
import { AddPhysicianSpecialCaseComponent } from './add-physician-special-case/add-physician-special-case.component';

@Component({
  selector: 'app-physician-special-case',
  templateUrl: './physician-special-case.component.html',
  styleUrls: ['./physician-special-case.component.scss']
})
export class PhysicianSpecialCaseComponent implements OnInit {

  constructor(public dialogRef:MatDialog) { }
  tableList:any;
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  filterToggle: boolean;
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }

  ngOnInit() {
    this.tableList = [  
      {id:1 ,BusinessCentre:"Sapphire MD", physician:"Fabrice Vanegas" ,Date:"04/02/2019", startTime:"1:00 PM" , endTime:"6:00 PM" ,},
      {id:2 ,BusinessCentre:"Core Health", physician:"Stephen McGill" ,Date:"06/03/2019", startTime:"8:00 AM" , endTime:"2:00 PM" , },
      {id:3 ,BusinessCentre:"Center for Pain Relief", physician:"Otto Rieder" , Date:"05/14/2019",startTime:"2:00 PM" , endTime:"7:00 PM" , },
      {id:4 ,BusinessCentre:"Prime Orthopedic", physician:"Joe Deu-Ngoc" ,Date:"12-11/2019", startTime:"9:00 AM" , endTime:"4:00 PM" ,},
      {id:5 ,BusinessCentre:"Pain Alleviation", physician:"Chris Soles" ,Date:"01/25/2019",startTime:"11:30 AM" , endTime:"7:30 PM" , },
      
      ]
  }
  public openspecialCaseDialog(id){
    let dialogRef= this.dialogRef.open(AddPhysicianSpecialCaseComponent,{
      data:id,
      height:"auto",
      width:'610px',
      autoFocus:false


    });
    
    dialogRef.afterClosed().subscribe(data=>{

    });
  }
  


}