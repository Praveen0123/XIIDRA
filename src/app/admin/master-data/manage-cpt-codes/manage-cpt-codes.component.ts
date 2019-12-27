import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { AddCptCodeComponent } from './add-cpt-code/add-cpt-code.component';

@Component({
  selector: 'app-manage-cpt-codes',
  templateUrl: './manage-cpt-codes.component.html',
  styleUrls: ['./manage-cpt-codes.component.scss']
})
export class ManageCptCodesComponent implements OnInit {

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
public dateTime2: Date;
public dateTime3: Date;
status = ["Active","Incative"];
stepsOptionSelected: any;
onStepsOptionsSelected(event){

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
    {id:1 , cptCode:"94375" , cptDescription:"RESPIRATORY FLOW VOLUME L" , priceCoreHealth:"$ 1027" , priceSapphireMD:'$ 2057' , pricePainAllieviation:'$ 257' , priceCenterPainRelief:'$ 4574' , pricePrimeOtrtho:'$ 4785' , status:true },
    {id:2 , cptCode:"94150" , cptDescription:"VITAL CAPACITY TEST" , priceCoreHealth:"$ 1097" , priceSapphireMD:'$ 1478' , pricePainAllieviation:'$ 4746' , priceCenterPainRelief:'$ 7418' , pricePrimeOtrtho:'$ 4787' , status:true },
    {id:3 , cptCode:"94729" , cptDescription:"CO/MEMBANE DIFFUSE CAPACI" , priceCoreHealth:"$ 1087" , priceSapphireMD:'$ 2578' , pricePainAllieviation:'$ 5457' , priceCenterPainRelief:'$ 6587' , pricePrimeOtrtho:'$ 4857' , status:true },
    {id:4 , cptCode:"94728" , cptDescription:"PULM FUNCT TEST OSCILLOME" , priceCoreHealth:"$ 1027" , priceSapphireMD:'$ 8967', pricePainAllieviation:'$ 4127' , priceCenterPainRelief:'$ 9678' , pricePrimeOtrtho:'$ 5524' , status:true },
    {id:5 , cptCode:"93015" , cptDescription:"CARDIOVASCULAR STRESS TES" , priceCoreHealth:"$ 1024" , priceSapphireMD:'$ 7412' , pricePainAllieviation:'$ 5478' , priceCenterPainRelief:'$ 1578' , pricePrimeOtrtho:'$ 6571' , status:true }
    ]
}


public openCPTDialog(id) {
let dialogRef = this.dialog.open(AddCptCodeComponent, {
    data: id,
    height: 'auto',
    width: '610px',
    autoFocus:false
});
dialogRef.afterClosed().subscribe(data => {
});
}

deleteCPTCode(){
//this.alertService.createAlert('Successfully deleted.', 1);
}

}
