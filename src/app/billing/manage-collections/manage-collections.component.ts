import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { AddCollectionDialogComponent } from './add-collection-dialog/add-collection-dialog.component';
import { AddPatientCollectionComponent } from './add-patient-collection/add-patient-collection.component';
import { ViewPatientChequesCollectionComponent } from './view-patient-cheques-collection/view-patient-cheques-collection.component';

@Component({
  selector: 'app-manage-collections',
  templateUrl: './manage-collections.component.html',
  styleUrls: ['./manage-collections.component.scss']
})
export class ManageCollectionsComponent implements OnInit {

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
    {id:1 , attorney:"Fabrice Vanegas" , patient:"Morgan" , claimReferrence:"102547" , claimAmount:"$ 8000" , receivedAmount:"$ 4000" , balanceAmount:"$ 4000" , email:"fabrice@gmail.com" , phone:"408-444-0058", status:true , mop:"Cheque" , caseNumber:"120478" , DOS:"04/25/2018" , appointmentCode:"ESI CERVICAL" },
    {id:2 , attorney:"Stephen McGill" , patient:"Stokes" , claimReferrence:"547801" , claimAmount:"$ 10254" , receivedAmount:"$ 6540" , balanceAmount:"$ 3804" , email:"Stephen@gmail.com" , phone:"127-256-5528", status:true , mop:"Cash" , caseNumber:"587547" , DOS:"07/28/2018" , appointmentCode:"INJECTION PROCEDURE MYELOGRAPHY/CT SPINAL	" },
    {id:3 , attorney:"Otto Rieder" , patient:"Billy" , claimReferrence:"102014" , claimAmount:"$ 10257" , receivedAmount:"$ 8701" , balanceAmount:"$ 1800" , email:"Rieder@gmail.com" , phone:"647-210-9935", status:false , mop:"Debit Card" , caseNumber:"364785" , DOS:"12/05/2018" , appointmentCode:"JAW STEROID INJECTION" },
    {id:4 , attorney:"Joe Deu-Ngoc" , patient:"Gilchrist" , claimReferrence:"521471" , claimAmount:"$ 23697" , receivedAmount:"$ 20547" , balanceAmount:"$ 2405" , email:"Deu-Ngoc@gmail.com" , phone:"657-2506-0096", status:true , mop:"Credit Card" , caseNumber:"785478" , DOS:"03/17/2019" , appointmentCode:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" },
    {id:5 , attorney:"Chris Soles"  , patient:"Adam Voges" , claimReferrence:"962574" , receivedAmount:"$ 547" , claimAmount:"$ 2014" , balanceAmount:"$ 1507" , email:"Chris@gmail.com" , phone:"987-236-5858", status:false , mop:"Cheque" , caseNumber:"965478" , DOS:"04/10/2019" , appointmentCode:"ESI CERVICAL" }
    ]
}


public openCollectionDialog(id) {
let dialogRef = this.dialog.open(AddCollectionDialogComponent, {
    data: id,
    height: 'auto',
    width: '600px',
    autoFocus:false
});
dialogRef.afterClosed().subscribe(data => {
});
}

public openPatientCollection(id) {
  let dialogRef = this.dialog.open(AddPatientCollectionComponent, {
      data: id,
      height: 'auto',
      width: '600px',
      autoFocus:false
  });
  dialogRef.afterClosed().subscribe(data => {
  });
  }

  public openPatientCheques(id) {
    let dialogRef = this.dialog.open(ViewPatientChequesCollectionComponent, {
        data: id,
        height: 'auto',
        width: '600px',
        autoFocus:false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
    }

deleteCollection(){
//this.alertService.createAlert('Successfully deleted.', 1);
}


}
