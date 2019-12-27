import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { AddAppointmentCodeComponent } from './add-appointment-code/add-appointment-code.component';

@Component({
  selector: 'app-appointment-codes',
  templateUrl: './appointment-codes.component.html',
  styleUrls: ['./appointment-codes.component.scss']
})
export class AppointmentCodesComponent implements OnInit {

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
    {id:1 , cptCode:"94375" , appointmentNameCoreHealth:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" , appointmentDescription:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" , duration:"30" , cptCode1:"A9585" ,cptCode2:"-" , cptCode3:"-" , status:true ,  appointmentNameSapphireMd:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNamePainAllieviation:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNameCenterPainRelief:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNamePrimeOrthopedics:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" },
    {id:2 , cptCode:"94150" , appointmentNameCoreHealth:"ESI CERVICAL" , appointmentDescription:"ESI CERVICAL" , duration:"15" , cptCode1:"J1030" ,cptCode2:"-" , cptCode3:"-" , status:true ,  appointmentNameSapphireMd:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNamePainAllieviation:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNameCenterPainRelief:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNamePrimeOrthopedics:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" },
    {id:3 , cptCode:"94729" , appointmentNameCoreHealth:"ESI LUMBAR" , appointmentDescription:"ESI LUMBAR" , duration:"30" , cptCode1:"J3301" ,cptCode2:"99211" , cptCode3:"99203" , status:false ,  appointmentNameSapphireMd:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNamePainAllieviation:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNameCenterPainRelief:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNamePrimeOrthopedics:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" },
    {id:4 , cptCode:"94728" , appointmentNameCoreHealth:"INJECTION PROCEDURE MYELOGRAPHY/CT SPINAL" , appointmentDescription:"INJECTION PROCEDURE MYELOGRAPHY/CT SPINAL" , duration:"45" , cptCode1:"Q9967" ,cptCode2:"J1030" , cptCode3:"-" , status:true ,  appointmentNameSapphireMd:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNamePainAllieviation:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNameCenterPainRelief:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNamePrimeOrthopedics:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" },
    {id:5 , cptCode:"93015" , appointmentNameCoreHealth:"JAW STEROID INJECTION" , appointmentDescription:"JAW STEROID INJECTION" , duration:"30" , cptCode1:"99241" ,cptCode2:"J1030" , cptCode3:"77002" , status:false  ,  appointmentNameSapphireMd:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNamePainAllieviation:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNameCenterPainRelief:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" ,  appointmentNamePrimeOrthopedics:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE"}
    ]
}


public openAppointmentDialog(id) {
let dialogRef = this.dialog.open(AddAppointmentCodeComponent, {
    data: id,
    height: 'auto',
    width: '650px',
    autoFocus:false
});
dialogRef.afterClosed().subscribe(data => {
});
}

deleteAppointmentCode(){
//this.alertService.createAlert('Successfully deleted.', 1);
}

}
