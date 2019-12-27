import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';
import { EditPhysicianTimingDialogComponent } from '../edit-physician-timing-dialog/edit-physician-timing-dialog.component';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {

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
      {id:1 , physician:"Fabrice Vanegas" , startTime:"1:00 PM" , endTime:"6:00 PM" , weekoffs:"Sunday,Monday,Tuesday,Saturday" , workingDays:"Wednesday,Thursday,Friday" , lunchTime:"12:30 PM - 1:15 PM"},
      {id:2 , physician:"Stephen McGill" , startTime:"8:00 AM" , endTime:"2:00 PM" , weekoffs:"Monday,Thursday,Friday" , workingDays:"Sunday,Tuesday,Wednesday,Saturday" , lunchTime:"12:30 PM - 1:15 PM"},
      {id:3 , physician:"Otto Rieder" , startTime:"2:00 PM" , endTime:"7:00 PM" , weekoffs:"Tuesday,Thursday,Friday,Saturday" , workingDays:"Sunday,Monday,Wednesday" , lunchTime:"12:30 PM - 1:15 PM"},
      {id:4 , physician:"Joe Deu-Ngoc" , startTime:"9:00 AM" , endTime:"4:00 PM" , weekoffs:"Sunday,Monday,Tuesday,Saturday" , workingDays:"Wednesday,Thursday,Friday" , lunchTime:"12:30 PM - 1:15 PM"},
      {id:5 , physician:"Chris Soles" , startTime:"11:30 AM" , endTime:"7:30 PM" , weekoffs:"Monday,Friday,Saturday" , workingDays:"Sunday,Tuesday,Wednesday,thursday" , lunchTime:"12:30 PM - 1:15 PM"},
      {id:1 , physician:"Fabrice Vanegas" , startTime:"1:00 PM" , endTime:"6:00 PM" , weekoffs:"Monday,Thursday,Friday" , workingDays:"Sunday,Tuesday,Wednesday,Saturday" , lunchTime:"1:00 PM - 1:45 PM"},
      {id:2 , physician:"Stephen McGill" , startTime:"8:00 AM" , endTime:"2:00 PM" , weekoffs:"Tuesday,Thursday,Friday,Saturday" , workingDays:"Sunday,Monday,Wednesday" , lunchTime:"1:30 PM - 2:15 PM"},
      {id:3 , physician:"Otto Rieder" , startTime:"2:00 PM" , endTime:"7:00 PM" , weekoffs:"Sunday,Monday,Tuesday,Saturday" , workingDays:"Wednesday,Thursday,Friday" , lunchTime:"2:00 PM - 2:45 PM"},
      {id:4 , physician:"Joe Deu-Ngoc" , startTime:"9:00 AM" , endTime:"4:00 PM" , weekoffs:"Tuesday,Thursday,Friday,Saturday" , workingDays:"Sunday,Monday,Wednesday" , lunchTime:"1:30 PM - 2:15 PM"},
      {id:5 , physician:"Chris Soles" , startTime:"11:30 AM" , endTime:"7:30 PM" , weekoffs:"Monday,Thursday,Friday" , workingDays:"Sunday,Tuesday,Wednesday,Saturday" , lunchTime:"1:00 PM - 1:45 PM"},
      {id:1 , physician:"Fabrice Vanegas" , startTime:"1:00 PM" , endTime:"6:00 PM" , weekoffs:"Sunday,Monday,Tuesday,Saturday" , workingDays:"Wednesday,Thursday,Friday" , lunchTime:"2:00 PM - 2:45 PM"},
      {id:2 , physician:"Stephen McGill" , startTime:"8:00 AM" , endTime:"2:00 PM" , weekoffs:"Tuesday,Thursday,Friday,Saturday" , workingDays:"Sunday,Monday,Wednesday" , lunchTime:"2:00 PM - 2:45 PM"},
      {id:3 , physician:"Otto Rieder" , startTime:"2:00 PM" , endTime:"7:00 PM" , weekoffs:"Sunday,Monday,Tuesday,Saturday" , workingDays:"Wednesday,Thursday,Friday" , lunchTime:"1:30 PM - 2:15 PM"},
      {id:4 , physician:"Joe Deu-Ngoc" , startTime:"9:00 AM" , endTime:"4:00 PM" , weekoffs:"Monday,Thursday,Friday" , workingDays:"Sunday,Tuesday,Wednesday,Saturday" , lunchTime:"1:00 PM - 1:45 PM"},
      {id:5 , physician:"Chris Soles" , startTime:"11:30 AM" , endTime:"7:30 PM" , weekoffs:"Tuesday,Thursday,Friday,Saturday" , workingDays:"Sunday,Monday,Wednesday" , lunchTime:"1:30 PM - 2:15 PM"}
      ]
}

openPhysicianTimingDialog(id) {
  let dialogRef = this.dialog.open(EditPhysicianTimingDialogComponent, {
    data: id,
    height: 'auto',
    width: '600px',
    autoFocus:false
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}

}
