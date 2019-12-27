import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { EditPhysicianWeekoffDialogComponent } from './edit-physician-weekoff-dialog/edit-physician-weekoff-dialog.component'

@Component({
  selector: 'app-physician-weekoff',
  templateUrl: './physician-weekoff.component.html',
  styleUrls: ['./physician-weekoff.component.scss']
})
export class PhysicianWeekoffComponent implements OnInit {

 
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
      {id:1 , physician:"Fabrice Vanegas" , firstWeekoff:"Monday" , secondWeekoff:"Thursday" , thirdWeekoff:"Friday" , fourthWeekoff:"-"},
      {id:2 , physician:"Stephen McGill" , firstWeekoff:"Tuesday" , secondWeekoff:"Wednesday" , thirdWeekoff:"-" , fourthWeekoff:"-"},
      {id:3 , physician:"Otto Rieder" , firstWeekoff:"Monday" , secondWeekoff:"Thursday" , thirdWeekoff:"Friday" , fourthWeekoff:"-"},
      {id:4 , physician:"Joe Deu-Ngoc" , firstWeekoff:"Sunday" , secondWeekoff:"Monday" , thirdWeekoff:"Saturday" , fourthWeekoff:"-"},
      {id:5 , physician:"Chris Soles" , firstWeekoff:"Monday" , secondWeekoff:"Tuesday" , thirdWeekoff:"Wednesday" , fourthWeekoff:"Thursday"},
      {id:1 , physician:"Fabrice Vanegas" , firstWeekoff:"Monday" , secondWeekoff:"Thursday" , thirdWeekoff:"Friday" , fourthWeekoff:"-"},
      {id:2 , physician:"Stephen McGill" , firstWeekoff:"Sunday" , secondWeekoff:"Monday" , thirdWeekoff:"Saturday" , fourthWeekoff:"-"},
      {id:3 , physician:"Otto Rieder" , firstWeekoff:"Tuesday" , secondWeekoff:"Wednesday" , thirdWeekoff:"-" , fourthWeekoff:"-"},
      {id:4 , physician:"Joe Deu-Ngoc" , firstWeekoff:"Monday" , secondWeekoff:"Thursday" , thirdWeekoff:"Friday" , fourthWeekoff:"-"},
      {id:5 , physician:"Chris Soles" , firstWeekoff:"Sunday" , secondWeekoff:"Monday" , thirdWeekoff:"Saturday" , fourthWeekoff:"-"},
      {id:1 , physician:"Fabrice Vanegas" , firstWeekoff:"Monday" , secondWeekoff:"Thursday" , thirdWeekoff:"Friday" , fourthWeekoff:"-"},
      {id:2 , physician:"Stephen McGill" , firstWeekoff:"Monday" , secondWeekoff:"Thursday" , thirdWeekoff:"Friday" , fourthWeekoff:"-"},
      {id:3 , physician:"Otto Rieder" , firstWeekoff:"Monday" , secondWeekoff:"Tuesday" , thirdWeekoff:"Wednesday" , fourthWeekoff:"Thursday"},
      {id:4 , physician:"Joe Deu-Ngoc" , firstWeekoff:"Monday" , secondWeekoff:"Thursday" , thirdWeekoff:"Friday" , fourthWeekoff:"-"},
      {id:5 , physician:"Chris Soles" , firstWeekoff:"Sunday" , secondWeekoff:"Monday" , thirdWeekoff:"Saturday" , fourthWeekoff:"-"}       
      ]
}

openPhysicianWeekoffDialog(id) {
  let dialogRef = this.dialog.open(EditPhysicianWeekoffDialogComponent, {
    data: id,
    height: 'auto',
    width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}

}
