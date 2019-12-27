import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { AddVisitStatusComponent } from './add-visit-status/add-visit-status.component';

@Component({
  selector: 'app-visit-status',
  templateUrl: './visit-status.component.html',
  styleUrls: ['./visit-status.component.scss']
})
export class VisitStatusComponent implements OnInit {

  tableList: any;

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

filterToggle: boolean;

public searchText: string;
public page: any;
public settings: Settings;
constructor(public appSettings: AppSettings,
  public dialog: MatDialog) {
  this.settings = this.appSettings.settings;
}

ngOnInit() {
  this.tableList = [  
    {visitStatus: "Front Desk" , status:true },
    {visitStatus: "Prescreening" , status:true },
    {visitStatus: "Diagnosis" , status:true },
    {visitStatus: "Billing" , status:true },
    // {visitStatus: "Completed" , status:true }       
    ]
}


public openClaimDialog(id) {
let dialogRef = this.dialog.open(AddVisitStatusComponent, {
    data: id,
    height: 'auto',
    width: '600px',
    autoFocus:false
});
dialogRef.afterClosed().subscribe(data => {
});
}

deleteClaimStatus(){
//this.alertService.createAlert('Successfully deleted.', 1);
}

}
