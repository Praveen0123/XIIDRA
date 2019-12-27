import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { AddPhysicianHolidayDialogComponent } from './add-physician-holiday-dialog/add-physician-holiday-dialog.component'

@Component({
  selector: 'app-physician-holidays',
  templateUrl: './physician-holidays.component.html',
  styleUrls: ['./physician-holidays.component.scss']
})
export class PhysicianHolidaysComponent implements OnInit {

  public searchText: string;
  public page: any;
  public settings: Settings;
  constructor(public appSettings: AppSettings,
      public dialog: MatDialog) {
      this.settings = this.appSettings.settings;
  }
  tableList:any;

  ngOnInit() {
    this.tableList = [  
      {id:1 ,BusinessCentre:"Sapphire MD", physician:"Fabrice Vanegas" , holidayDate:"05/09/2019"},
      {id:2 ,BusinessCentre:"Core Health", physician:"Stephen McGill" , holidayDate:"05/25/2019"},
      {id:3 ,BusinessCentre:"Center for Pain Relief", physician:"Otto Rieder" , holidayDate:"05/26/2019"},
      {id:4 , BusinessCentre:"Prime Orthopedic",physician:"Joe Deu-Ngoc" , holidayDate:"05/27/2019"},
      {id:5 ,BusinessCentre:"Pain Alleviation",physician:"Chris Soles" , holidayDate:"05/30/2019"},
      {id:1 ,BusinessCentre:"Pain Alleviation", physician:"Fabrice Vanegas" , holidayDate:"05/09/2019"},
      {id:2 ,BusinessCentre:"Pain Alleviation", physician:"Stephen McGill" , holidayDate:"05/25/2019"},
      {id:3 , BusinessCentre:"Sapphire MD",physician:"Otto Rieder" , holidayDate:"05/26/2019"},
      {id:4 , BusinessCentre:"Sapphire MD",physician:"Joe Deu-Ngoc" , holidayDate:"05/27/2019"},
      {id:5 , BusinessCentre:"Sapphire MD",physician:"Chris Soles" , holidayDate:"05/30/2019"},
      {id:1 ,BusinessCentre:"Core Health", physician:"Fabrice Vanegas" , holidayDate:"05/09/2019"},
      {id:2 ,BusinessCentre:"Core Health", physician:"Stephen McGill" , holidayDate:"05/25/2019"},
      {id:3 , BusinessCentre:"Core Health",physician:"Otto Rieder" , holidayDate:"05/26/2019"},
      {id:4 , BusinessCentre:"Center for Pain Relief",physician:"Joe Deu-Ngoc" , holidayDate:"05/27/2019"},
      {id:5 ,BusinessCentre:"Center for Pain Relief", physician:"Chris Soles" , holidayDate:"05/30/2019"}       
      ]
}

openHolidayDialog(id) {
  let dialogRef = this.dialog.open(AddPhysicianHolidayDialogComponent, {
    data: id,
    height: 'auto',
    width: '600px',
    autoFocus:false
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}

}