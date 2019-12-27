import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { AddIPartnerComponent } from './add-i-partner/add-i-partner.component';

@Component({
  selector: 'app-imaging-partners',
  templateUrl: './imaging-partners.component.html',
  styleUrls: ['./imaging-partners.component.scss']
})
export class ImagingPartnersComponent implements OnInit {

  tableList: any;

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

filterToggle: boolean;
toggleFilter() {
  this.filterToggle = !this.filterToggle;
}

status = ["Active","Incative"];
  locations = ["Houston","Sugar Land","West Houston"];
public searchText: string;
public page: any;
public settings: Settings;
constructor(public appSettings: AppSettings,
  public dialog: MatDialog) {
  this.settings = this.appSettings.settings;
}

ngOnInit() {
  this.tableList = [  
    {id:1 , partner:"Fabrice Vanegas" , email:"fabrice@gmail.com" , phone:"408-444-0058", status:true, faxNumber:"+1-210-369-5487", city:"Charlotte", address:"4151 SOUTHWEST FRWY., STE 780", state:"California"},
    {id:2 , partner:"Stephen McGill" , email:"Stephen@gmail.com" , phone:"127-256-5528", status:true, faxNumber:"+1-110-368-5457", city:"Philadelphia", address:"3601 NAVIGATION BLVD", state:"Indiana"},
    {id:3 , partner:"Otto Rieder" , email:"Rieder@gmail.com" , phone:"647-210-9935", status:false, faxNumber:"+1-210-369-1523", city:"Portland", address:"4441 W. AIRPORT FRWY., SUITE 200", state:"Florida"},
    {id:4 , partner:"Joe Deu-Ngoc" , email:"Deu-Ngoc@gmail.com" , phone:"657-2506-0096", status:false, faxNumber:"+1-456-369-5487", city:"Manchester", address:"777 POST OAK BLVD., SUITE 450", state:"Arizona"},
    {id:5 , partner:"Chris Soles" , email:"Chris@gmail.com" , phone:"987-236-5858", status:false, faxNumber:"+1-210-455-5487", city:"Chicago", address:"4425 S. MOPAC EXPRESSWAY, #600", state:"Mississippi"}
    ]
}


public openPartnerDialog(id) {
let dialogRef = this.dialog.open(AddIPartnerComponent, {
    data: id,
    height: 'auto',
    width: '600px',
    autoFocus:false
});
dialogRef.afterClosed().subscribe(data => {
});
}

deletePartner(){
//this.alertService.createAlert('Successfully deleted.', 1);
}
}
