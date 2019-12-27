import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { AddBusinessCenterComponent } from './add-business-center/add-business-center.component';

@Component({
  selector: 'app-business-centers',
  templateUrl: './business-centers.component.html',
  styleUrls: ['./business-centers.component.scss']
})
export class BusinessCentersComponent implements OnInit {

  tableList: any;

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

filterToggle: boolean;
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
    {businessCenter:"Core Health" , state:"New York" , city : "San Francisco" , status:true , email:"fabrice@gmail.com" , phone:"408-444-0058", faxNumber:"+1-210-369-5487", address:"4151 SOUTHWEST FRWY., STE 780"},
    {businessCenter:"Sapphire MD" , state:"New Jersey" , city : "Los Angeles" , status:true , email:"fabrice@gmail.com" , phone:"417-424-2147", faxNumber:"+1-110-368-5457", address:"3601 NAVIGATION BLVD"},
    {businessCenter:"Pain Allieviation" , state:"Texas" , city : "Chicago" , status:true , email:"fabrice@gmail.com" , phone:"257-697-2158", faxNumber:"+1-210-369-1523", address:"4441 W. AIRPORT FRWY., SUITE 200"},
    {businessCenter:"Centre for Pain Relief" , state:"Virginia" , city : "Boston" , status:true , email:"fabrice@gmail.com" , phone:"657-278-0321", faxNumber:"+1-456-369-5487", address:"777 POST OAK BLVD., SUITE 450"},
    {businessCenter:"Prime Orthopedics" , state:"Vermont" , city : "Austin" , status:true , email:"fabrice@gmail.com" , phone:"910-217-6974", faxNumber:"+1-210-455-5487", address:"4425 S. MOPAC EXPRESSWAY, #600"},
    ]
}


public openBusinessDialog(id) {
let dialogRef = this.dialog.open(AddBusinessCenterComponent, {
    data: id,
    height: 'auto',
    width: '600px',
    autoFocus:false
});
dialogRef.afterClosed().subscribe(data => {
});
}

deleteBusinessCenter(){
//this.alertService.createAlert('Successfully deleted.', 1);
}

}
