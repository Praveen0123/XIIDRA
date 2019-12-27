import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { AddImagingCodeComponent } from './add-imaging-code/add-imaging-code.component';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-imaging-codes',
  templateUrl: './imaging-codes.component.html',
  styleUrls: ['./imaging-codes.component.scss']
})
export class ImagingCodesComponent implements OnInit {

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
  public dialog: MatDialog,public alertService: AlertService) {
  this.settings = this.appSettings.settings;
}

ngOnInit() {
  this.tableList = [  
    {id:1 , imagingCode:"94375" , name:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" , description:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" , duration:"30" , cptCode1:"A9585" ,cptCode2:"-" , cptCode3:"-" , status:true ,  appointmentNameSapphireMd:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNamePainAllieviation:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNameCenterPainRelief:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNamePrimeOrthopedics:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" },
    {id:2 , imagingCode:"94150" , name:"ESI CERVICAL" , description:"ESI CERVICAL" , duration:"15" , cptCode1:"J1030" ,cptCode2:"-" , cptCode3:"-" , status:true ,  appointmentNameSapphireMd:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNamePainAllieviation:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNameCenterPainRelief:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNamePrimeOrthopedics:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" },
    {id:3 , imagingCode:"94729" , name:"ESI LUMBAR" , description:"ESI LUMBAR" , duration:"30" , cptCode1:"J3301" ,cptCode2:"99211" , cptCode3:"99203" , status:false ,  appointmentNameSapphireMd:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNamePainAllieviation:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNameCenterPainRelief:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNamePrimeOrthopedics:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" },
    {id:4 , imagingCode:"94728" , name:"INJECTION PROCEDURE MYELOGRAPHY/CT SPINAL" , description:"INJECTION PROCEDURE MYELOGRAPHY/CT SPINAL" , duration:"45" , cptCode1:"Q9967" ,cptCode2:"J1030" , cptCode3:"-" , status:true ,  appointmentNameSapphireMd:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNamePainAllieviation:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNameCenterPainRelief:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNamePrimeOrthopedics:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" },
    {id:5 , imagingCode:"93015" , name:"JAW STEROID INJECTION" , description:"JAW STEROID INJECTION" , duration:"30" , cptCode1:"99241" ,cptCode2:"J1030" , cptCode3:"77002" , status:false  ,  appointmentNameSapphireMd:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNamePainAllieviation:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNameCenterPainRelief:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNamePrimeOrthopedics:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE"}
    ]
}


public openImagingDialog(id) {
let dialogRef = this.dialog.open(AddImagingCodeComponent, {
    data: id,
    height: 'auto',
    width: '650px',
    autoFocus:false
});
dialogRef.afterClosed().subscribe(data => {
});
}

deleteImagingCode(){
this.alertService.createAlert('Successfully deleted.', 1);
}

}
