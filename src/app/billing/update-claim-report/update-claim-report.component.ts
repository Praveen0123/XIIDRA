import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-claim-report',
  templateUrl: './update-claim-report.component.html',
  styleUrls: ['./update-claim-report.component.scss']
})
export class UpdateClaimReportComponent implements OnInit {

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
selected:7;
public searchText: string;
public page: any;
public settings: Settings;
constructor(public appSettings: AppSettings,
  public dialog: MatDialog, public router: Router) {
  this.settings = this.appSettings.settings;
}

ngOnInit() {
  this.tableList = [  
    {cpt:"51729" , cptDesc:"CMG w Voiding pressure" , mod:"" , modDesc:"-" , units:"1" , diaPointers:""},
    {cpt:"51748" , cptDesc:"EMG of Anal or Urethra" , mod:"" , modDesc:"-" , units:"1" , diaPointers:""},
    {cpt:"81002" , cptDesc:"Urine Analysis" , mod:"" , modDesc:"-" , units:"1" , diaPointers:""},
    {cpt:"51797" , cptDesc:"Void Press Intra Abdom" , mod:"" , modDesc:"-" , units:"1" , diaPointers:""},
    ]
}

saveOrder() {
  this.router.navigateByUrl('/sapphire/patients/managevisits/billing');
}

}
