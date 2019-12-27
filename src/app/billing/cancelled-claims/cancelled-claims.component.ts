import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';

@Component({
  selector: 'app-cancelled-claims',
  templateUrl: './cancelled-claims.component.html',
  styleUrls: ['./cancelled-claims.component.scss']
})
export class CancelledClaimsComponent implements OnInit {

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
  status = ["Draft","Submitted","Cancelled","Paid"];
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
  tableList:any;
  
  
  ngOnInit() {
    this.tableList = [  
      {id:1 , claimRef:"10215021" , patientName:"Fabrice Vanegas" , test:"CPT 2nd NIGHT" , apptDate:"08/10/2019" , insPrimary:"AETNA PPO" , attorney:"Kipling Morton" , schStatus:"Completed" , insStatus:"Approved" , claimStatus:"Billed" , claimAmount:"$ 3471" , billingProvider:"Texas Medical Alliance" , codedDate:"Jul-11-2019" , billedDate:"Jul-15-2019" , lastName:"Vanegas", dob:"02/05/1964", orderId:"1257963" , orderingPhysician:"David", receivedDate:"03/03/2019",insurance:2 , payDate:"-" , payRef:"-" , amount:"-" , selected:0 , dos:'08/10/2019' , caseNumber:"201478" , appointmentCode:"FINE NEEDLE ASPIRATION WITH IMAGING GUIDANCE" , status:"Cancelled"},
      {id:2 , claimRef:"41521478" , patientName:"Stephen McGill" , test:"Ultra Sound" , apptDate:"08/10/2019" , insPrimary:"AETNA MC" , attorney:"Brad Kewalramani" , schStatus:"Scheduled" , insStatus:"Approved" , claimStatus:"Billed" , claimAmount:"$ 2569" , billingProvider:"Texas Medical Alliance" , codedDate:"-" , lastName:"McGill", billedDate:"Jul-11-2019" , dob:"09/07/1985", orderId:"5897429" , orderingPhysician:"Stokes", receivedDate:"21/04/2019",insurance:1 , payDate:"-" , payRef:"-" , amount:"-" , selected:1 , se:1 , dos:'08/10/2019' , caseNumber:"365478" , appointmentCode:"ESI CERVICAL" , status:"Cancelled"},
      {id:3 , claimRef:"42563697" , patientName:"Otto Rieder" , test:"ECG" , apptDate:"08/08/2019" , schStatus:"Scheduled" , attorney:"Dan McCarthy" , insPrimary:"BCBS BLUE CHOICE PPO" , insStatus:"Ineligible" , claimStatus:"NA" , claimAmount:"$ 8587" , billingProvider:"Texas Medical Alliance" , lastName:"Rieder", codedDate:"Jul-09-2019" , billedDate:"-" , dob:"25/11/2010", orderId:"2368254" , orderingPhysician:"Morgan", receivedDate:"29/04/2019",insurance:1 , payDate:"-" , payRef:"-" , amount:"-" , selected:4 , dos:'08/08/2019' , caseNumber:"989424" , appointmentCode:"INJECTION PROCEDURE MYELOGRAPHY/CT SPINAL" , status:"Cancelled"},
      {id:4 , claimRef:"74102589" , patientName:"Joe Deu-Ngoc" , test:"MRI Scan" , apptDate:"03/07/2019" , schStatus:"Final Report" , attorney:"Michael Persaud" , insPrimary:"MOLINA HEALTHCARE" , insStatus:"Ineligible" , claimStatus:"NA" , claimAmount:"$ 1025" , billingProvider:"Texas Medical Alliance" , codedDate:"Jul-15-2019" , billedDate:"-" , lastName:"Deu-Ngoc", dob:"17/09/1966", orderId:"1289637" , orderingPhysician:"Steven", receivedDate:"17/05/2019",insurance:2 , payDate:"07/29/2019" , payRef:"75214789" , amount:"$ 547" , selected:3 , dos:'03/07/2019' , caseNumber:"547851" , appointmentCode:"ESI LUMBAR" , status:"Cancelled"},
      {id:5 , claimRef:"32547851" , patientName:"Chris Soles" , test:"Surgery" , apptDate:"01/11/2019" , schStatus:"Completed" , attorney:"Habib Kharsa" , insPrimary:"UNITED HEALTHCARE COMMUNITY PLAN" , insStatus:"Approved" , lastName:"Soles", claimAmount:"$ 3652" , billingProvider:"Texas Medical Alliance" , claimStatus:"Billed" , codedDate:"-" , billedDate:"Jul-16-2019" , dob:"31/01/2000", orderId:"2345873" , orderingPhysician:"Liam Plunkeet", receivedDate:"22/05/2019",insurance:2 , payDate:"06/24/2019" , payRef:"12547891" , amount:"$ 3044" , selected:3 , dos:'01/11/2019' , caseNumber:"361478" , appointmentCode:"JAW STEROID INJECTION" , status:"Cancelled"}
    ]
  }

  deleteclaim() {

  }

}
