import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { AddPharmacyComponent } from './add-pharmacy/add-pharmacy.component';

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrls: ['./pharmacies.component.scss']
})
export class PharmaciesComponent implements OnInit {

  tableList: any;

  status = ["Active","Incative"];
  locations = ["Houston","Sugar Land","West Houston"];

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

filterToggle: boolean;
toggleFilter() {
  this.filterToggle = !this.filterToggle;
}

public searchText: string;
public page: any;
public settings: Settings;
constructor(public appSettings: AppSettings,
  public dialog: MatDialog) {
  this.settings = this.appSettings.settings;
}

ngOnInit() {
  this.tableList = [  
    {id:1 , pharmacy:"CVS Pharmacy" , state:"Houston" , partner:"Fabrice Vanegas" , email:"fabrice@cvspharma.com" , phone:"408-444-0058", status:true, faxNumber:"+1-210-369-5487", city:"Charlotte", address:"4151 SOUTHWEST FRWY., STE 780"},
    {id:2 , pharmacy:"Casa De Amigos Clinic Pharmacy" , state:"Arizona" , partner:"Stephen McGill" , email:"Stephen@deamigos.com" , phone:"127-256-5528", status:true, faxNumber:"+1-110-368-5457", city:"Philadelphia", address:"3601 NAVIGATION BLVD"},
    {id:3 , pharmacy:"Walgreens Pharmacy" , state:"Mississippi" , partner:"Otto Rieder" , email:"Rieder@walgreens.com" , phone:"647-210-9935", status:false, faxNumber:"+1-210-369-1523", city:"Portland", address:"4441 W. AIRPORT FRWY., SUITE 200"},
    {id:4 , pharmacy:"Canal Pharmacy" , state:"Sugar Land" , partner:"Joe Deu-Ngoc" , email:"Deu-Ngoc@canalpharma.com" , phone:"657-2506-0096", status:false, faxNumber:"+1-456-369-5487", city:"Manchester", address:"777 POST OAK BLVD., SUITE 450"},
    {id:5 , pharmacy:"San Jose Clinic Pharmacy" , state:"WestHouston" , partner:"Chris Soles" , email:"Chris@sanjose.com" , phone:"987-236-5858", status:false, faxNumber:"+1-210-455-5487", city:"Chicago", address:"4425 S. MOPAC EXPRESSWAY, #600"}
    ]
}


public openPharmacyDialog(id) {
let dialogRef = this.dialog.open(AddPharmacyComponent, {
    data: id,
    height: 'auto',
    width: '600px',
    autoFocus:false
});
dialogRef.afterClosed().subscribe(data => {
});
}

deletePharmacy(){
//this.alertService.createAlert('Successfully deleted.', 1);
}

}
