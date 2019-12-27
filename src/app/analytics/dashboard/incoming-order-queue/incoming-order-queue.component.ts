import { AddPatientDataComponent } from './addPatientData/addPatientData.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { AddIncomingOrderComponent } from './add-incoming-order/add-incoming-order.component';
import { ProfileAndInsuranceDialogComponent } from './profile-and-insurance-dialog/profile-and-insurance-dialog.component'
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-incoming-order-queue',
  templateUrl: './incoming-order-queue.component.html',
  styleUrls: ['./incoming-order-queue.component.scss'],
})
export class IncomingOrderQueueComponent implements OnInit {
  
  PhysiciansList: any;
  tableList: any;
  config: any;
  
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
    public dialog: MatDialog,
    private alertService : AlertService) {
      this.settings = this.appSettings.settings;
    }

    
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }
  public dateTime2: Date;
  public dateTime3: Date;
  referringOptions = ["Stephen McGill","Otto Rieder","Joe Deu-Ngoc","Chris Soles","Brad Kewalramani","Michael Persaud","Habib Kharsa"];
  stepsOptionSelected: any;
  onStepsOptionsSelected(event){
  
  }

  
    
    ngOnInit() {
      this.filterToggle = false;

      
 
      
      this.PhysiciansList = [
        {id:1 , CountryCode:"CA", Email:"david.myrden@novartis.com", Territory:"X1001", lastName:"Kells", middleName:"", firstName:"Andrea",Address1:"",Address2:"",Address3:"", City:"Calgary",Province:'AB',postalCode:'V5C6C1',Country:'CA',Specialty:'Optometry'},
        {id:2 , CountryCode:"CA", Email:"cam.mcdonald@novartis.com", Territory:"X1002", lastName:"Rychjohn", middleName:"", firstName:"Tricia",Address1:"3-2918 Tutt St.",Address2:"checked",Address3:"", City:"Kelowna",Province:'BC',postalCode:'V1Y 8Z5',Country:'CA',Specialty:'Optometry'},
        {id:3 , CountryCode:"CA", Email:"dominique.wishart@novartis.com", Territory:"X1003", lastName:"Veselinovic", middleName:"", firstName:"Aleksandra",Address1:"2155 10TH AVE",Address2:"SUITE 203",Address3:"", City:"Kelowna",Province:'BC',postalCode:'V2M 5J6',Country:'CA',Specialty:'Ophthalmology/Ophtalmologie'},
        {id:4 , CountryCode:"CA", Email:"alannah.bruns@novartis.com", Territory:"X1004", lastName:"Iovieno", middleName:"", firstName:"Alfonso",Address1:"",Address2:"2525 WILLOW ST",Address3:"SUITE 616", City:"Vancouver",Province:'BC',postalCode:'V6Z 1E4',Country:'CA',Specialty:'Ophthalmology/Ophtalmologie'},
        {id:5 , CountryCode:"CA", Email:"philip.wong@novartis.com", Territory:"X1005", lastName:"Toor", middleName:"Singh", firstName:"Charanpal",Address1:"",Address2:"",Address3:"", City:"New Westminster",Province:'AB',postalCode:'V2L 3L4',Country:'CA',Specialty:'Optometry'},
       
      ]
      this.tableList = [  
        {id:1 , firstName:"Fabrice" , normal:5 , faxNumber:"+1-403-444-5207" , eFaxNumber:"1202584" , lastName:"Vanegas", dob:"02/05/1964", orderingPhysician:"David", receivedDate:"03/03/2019"},
        {id:2 , firstName:"Stephen" , normal:6 , faxNumber:"+1-780-142-5207" , eFaxNumber:"3021478" , lastName:"McGill", dob:"09/07/1985", orderingPhysician:"Stokes", receivedDate:"21/04/2019"},
        {id:3 , firstName:"Otto" , normal:6 , faxNumber:"+1-604-0257-3614" , eFaxNumber:"2015478" , lastName:"Rieder", dob:"25/11/2010", orderingPhysician:"Morgan", receivedDate:"29/04/2019"},
        {id:4 , firstName:"Joe" , normal:5 , faxNumber:"+1-403-205-5691" , eFaxNumber:"2015697" , lastName:"Deu-Ngoc", dob:"17/09/1966", orderingPhysician:"Steven", receivedDate:"17/05/2019"},
        {id:5 , firstName:"Chris" , normal:5 , faxNumber:"+1-403-293-9696" , eFaxNumber:"6365471" , lastName:"Soles", dob:"31/01/2000", orderingPhysician:"Liam Plunkeet", receivedDate:"22/05/2019"}       
      ]

      

      
    }
    
    
    public uploadphysiciansDataDialog() {
      let dialogRef = this.dialog.open(AddPatientDataComponent, {
        height: 'auto',
        width: '400px',
        autoFocus: false,
        
      });
      dialogRef.afterClosed().subscribe(data => {
      });
    }

    
    public addphysiciansDialog(id) {
      let dialogRef = this.dialog.open(AddIncomingOrderComponent, {
        data: id,
        height: 'auto',
        width: '700px',
        autoFocus: false,
        
      });
      dialogRef.afterClosed().subscribe(data => {
      });
    }

    public openInsuranceDialog(id) {
      let dialogRef = this.dialog.open(ProfileAndInsuranceDialogComponent, {
        data: id,
        height: 'auto',
        width: '700px',
        autoFocus: false
      });
      dialogRef.afterClosed().subscribe(data => {
      });
    }
    
    deletePatientOrder(){
      this.alertService.createAlert('Successfully deleted.', 1);       
    }
    
    
  }
  