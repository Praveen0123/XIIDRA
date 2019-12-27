import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { AddVisitConfirmationStatusComponent } from './add-visit-confirmation-status/add-visit-confirmation-status.component';

@Component({
  selector: 'app-visit-confirmation-status',
  templateUrl: './visit-confirmation-status.component.html',
  styleUrls: ['./visit-confirmation-status.component.scss']
})
export class VisitConfirmationStatusComponent implements OnInit {

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
    {visitConfirmationStatus:"Scheduled" , status:true },
    {visitConfirmationStatus:"Confirmed" , status:true},
    {visitConfirmationStatus:"Not Reachable" , status:true},
    {visitConfirmationStatus:"No Response" , status:true},
    {visitConfirmationStatus:"On Hold", status:true},
    {visitConfirmationStatus:"Cancelled" , status:true},      
    ]
}


public openVisitConfirmationDialog(id) {
let dialogRef = this.dialog.open(AddVisitConfirmationStatusComponent, {
    data: id,
    height: 'auto',
    width: '600px',
    autoFocus: false
});
dialogRef.afterClosed().subscribe(data => {
});
}

deleteVisitConfirmationStatus(){
//this.alertService.createAlert('Successfully deleted.', 1);
}


}
