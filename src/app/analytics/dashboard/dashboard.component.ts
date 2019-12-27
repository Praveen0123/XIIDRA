import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { DownloadExcelService } from 'src/app/download-excel.service';

import { MatDialog } from '@angular/material';
import { AddvochersComponent } from 'src/app/shared/addvochers/addvochers.component';
import { AdditionsofvochersComponent } from 'src/app/shared/additionsofvochers/additionsofvochers.component';
import { UploadvouchersComponent } from 'src/app/shared/uploadvouchers/uploadvouchers.component';



import { AlertService } from 'src/app/shared/services/alert.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  vouchersList: any;
  config: any;

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  
  public settings: Settings;
  public filterToggle : boolean;
  constructor(public appSettings:AppSettings,public _downloadExcelService : DownloadExcelService,public dialog: MatDialog,){
    this.settings = this.appSettings.settings; 
    
  }

  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }

  openVouchersDialog(id){
    let dialogRef = this.dialog.open(AddvochersComponent, {
      data: id,
      height: 'auto',
      width: '700px',
      autoFocus: false,
      
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  
  }
   addvouchersDialog(id) {
      let dialogRef = this.dialog.open(AdditionsofvochersComponent, {
        data: id,
        height: 'auto',
        width: '700px',
        autoFocus: false,
        
      });
      dialogRef.afterClosed().subscribe(data => {
      });
    }

    public uploadvouchersDataDialog() {
      let dialogRef = this.dialog.open(UploadvouchersComponent, {
        height: 'auto',
        width: '400px',
        autoFocus: false,
        
      });
      dialogRef.afterClosed().subscribe(data => {
      });
    }

  

  ngOnInit() {
    this.filterToggle = false;




    this.vouchersList = [
      {id:1 , ProductName:"Xiidra", CountryCode:"CA", VoucherId:"X13561AB", DistributionDate:"02/19/2023", ExpirationDate:"02/19/2023", UserEmail:"Paulina.kedzior@novartis.com",UserTerritory:"X2503",MemberCertificate:"Xii135601"},
      {id:2 , ProductName:"Xiidra", CountryCode:"CA", VoucherId:"X13561AB", DistributionDate:"02/19/2023", ExpirationDate:"02/19/2023", UserEmail:"philip.worng@novartis.com",UserTerritory:"X2503",MemberCertificate:"Xii135602"},
      {id:3 , ProductName:"Xiidra", CountryCode:"CA", VoucherId:"X13561AB", DistributionDate:"02/19/2023", ExpirationDate:"02/19/2023", UserEmail:"Paulina.kedzior@novartis.com",UserTerritory:"X2503",MemberCertificate:"Xii135603"},
      {id:4 , ProductName:"Xiidra", CountryCode:"CA", VoucherId:"X13561AB", DistributionDate:"02/19/2023", ExpirationDate:"02/19/2023", UserEmail:"philip.worng@novartis.com",UserTerritory:"X2503",MemberCertificate:"Xii135604"},
      {id:5 , ProductName:"Xiidra", CountryCode:"CA", VoucherId:"X13561AB", DistributionDate:"02/19/2023", ExpirationDate:"02/19/2023", UserEmail:"Paulina.kedzior@novartis.com",UserTerritory:"X2503",MemberCertificate:"Xii135605"},
     
    ]
  }
  excelData : any[]
  exportAsExcel(){
    console.log(this.vouchersList,'Whole Data');
    this.excelData = [];
    this.vouchersList.forEach(element => {
            // var jobShortCode = element['jobShortCode'].toString();
        this.excelData.push({
            'ProductName': element['ProductName'],'CountryCode':element['CountryCode'],'VoucherId':element['VoucherId'], 'DistributionDate':element['DistributionDate'],'ExpirationDate':element['ExpirationDate'],'Email': element['UserEmail'], 'UserTerritory': element['UserTerritory'],
            'MemberCertificate ': element['MemberCertificate'], 
            // 'Status' : element['status'] ? 'Active' : 'Inactive'
        })
    });
    console.log(this.excelData)
    this._downloadExcelService.exportAsExcelFile(this.excelData,'Download CSV')
}
// myform: FormGroup;
projectOptions = ["Port Area Initiative", "Basement Flooding", "Dome Scanning", "Culvert Topographic", "Bridge Topographic","Town House Foundation"];
projectOptionSelected: any;
onprojectptionsSelected(event) {
  
}
siteOptions = ["MISS201905123", "MISS202684235", "MISS202612598", "MISS202758926"];
siteOptionSelected: any;
onsiteOptionsSelected(event) {
  
}
regionOptions = ["Cordillera", "Prairies", "North", "Canadian Shield", "St. Lawrence River","Atlantic","Great Lakes"];
regionOptionSelected: any;
onregionOptionsSelected(event) {
 
}
cityOptions = ["Vancouver", "Ottawa", "Regina", "Toronto", "Charlottetown", "Edmonton ", "Fredericton "];
cityOptionSelected: any;
oncityOptionsSelected(event) {
 
}
roleOptions = ['Project Manager', 'Production Team', 'Project Admin', 'Administration', 'Field Staff', 'CAD Staff', 'Finance'];
roleOptionSelected: any;

onroleOptionsSelected(event) {
  
}
staffOptions = ["Dwayne", "Dave", "Emily", "Joe", "Kate", "Scott", "Ryan", "Chris", "Justin", "Ken", "Dan", "Tony", "Stephanie", "Laurie"];
staffOptionSelected: any;

onstaffOptionsSelected(event) {
  
}
projectstageOptions = ["Initiated", "Completed", "InProcess", "Pending"];
projectstageOptionSelected: any;

onprojectstageOptionsSelected(event) {
 
}
billingstatusOptions = ["Paid", "Overdue", "Pending"];
billingstatusOptionSelected: any;

onbillingstatusOptionsSelected(event) {
  
}
archivalstatusOptions = ["Date"];
archivalstatusOptionSelected: any;

onarchivalstatusOptionsSelected(event) {

}

}
