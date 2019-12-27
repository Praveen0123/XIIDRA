import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { UsersService } from './users.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { AlertService } from '../../shared/services/alert.service';
<<<<<<< HEAD
import { ExportCSVDialogComponent } from 'src/app/shared/export-csv-dialog/export-csv-dialog.component';
import { SendemailDialogComponent } from 'src/app/shared/sendemail-dialog/sendemail-dialog.component';
import { DownloadExcelService } from 'src/app/download-excel.service';
import * as jspdf from 'jspdf';  
  
import html2canvas from 'html2canvas';  
=======
import { ResetUserPasswordComponent } from './reset-user-password/reset-user-password.component';
import { PageEvent } from '@angular/material';
>>>>>>> 424bab94b42de691b2fb230219ac1998a2fbe3a0

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [UsersService, AlertService]
})
export class UsersComponent implements OnInit {
<<<<<<< HEAD
    inventoryList: any;

    tableList: any;

=======
    
    
    tableList: any;
    pageEvent: PageEvent;
    public pageSize = 5;
    public currentPage = 0;
    public totalSize = 0;
    public searchText: string;
    public page: any;
    tableLists: any;
>>>>>>> 424bab94b42de691b2fb230219ac1998a2fbe3a0
    public popoverTitle: string = 'Confirm Delete';
    public popoverMessage: string = 'Are you sure you want to delete this.?';
    public popoverStatusTitle: string = 'Confirm Status Change';
    public popoverStatusMessage: string = 'Are you sure you want to change status.?';
    public cancelClicked: boolean = false;
<<<<<<< HEAD


=======
    
>>>>>>> 424bab94b42de691b2fb230219ac1998a2fbe3a0
    filterToggle: boolean;
    toggleFilter() {
        this.filterToggle = !this.filterToggle;
    }
    public dateTime2: Date;
    public dateTime3: Date;
<<<<<<< HEAD
    Speciality = ["Optometry", "Ophthalmology/Ophtalmologie"];
    stepsOptionSelected: any;
    onStepsOptionsSelected(event) {
        console.log(event);
    }

    public searchText: string;
    public page: any;
    public settings: Settings;
    constructor(public appSettings: AppSettings,
        public dialog: MatDialog,
        public usersService: UsersService, private alertService: AlertService,private _downloadExcelService: DownloadExcelService) {
        this.settings = this.appSettings.settings;
    }





    public captureScreen()  
    {  
      var data = document.getElementById('contentToConvert');  
      html2canvas(data).then(canvas => {  
        // Few necessary setting options  
        var imgWidth = 208;   
        var pageHeight = 295;    
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;  
    
        const contentDataURL = canvas.toDataURL('image/png')  
        let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
        var position = 0;  
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
        pdf.save('MYPdf.pdf'); // Generated PDF   
      });  
    } 
    


    

    ngOnInit() {
        this.getUser()




        this.inventoryList = [
            { id: 1, ProgramID: '1001', ProductName: "Xiidra", CountryCode: "CA", VoucherId: "X13561AB", DistributionDate: "02/19/2023", ExpirationDate: "02/19/2023", UserEmail: "Paulina.kedzior@novartis.com", UserTerritory: "X2503", MemberCertificate: "Xii135601", OrderDate: '02/19/2023', Order: '', lastName: "Kells", firstName: "Andrea", Address: "", City: "Calgary", Province: 'AB', postalCode: 'V5C6C1', Speciality: 'Optometry' },
            { id: 2, ProgramID: '1001', ProductName: "Xiidra", CountryCode: "CA", VoucherId: "X13561AB", DistributionDate: "02/19/2023", ExpirationDate: "02/19/2023", UserEmail: "philip.worng@novartis.com", UserTerritory: "X2503", MemberCertificate: "Xii135602", OrderDate: '02/19/2023', Order: '', lastName: "Rychjohn", firstName: "Tricia", Address: "3-2918 Tutt St.", City: "Calgary", Province: 'AB', postalCode: 'V5C6C1', Speciality: 'Optometry' },
            { id: 3, ProgramID: '1001', ProductName: "Xiidra", CountryCode: "CA", VoucherId: "X13561AB", DistributionDate: "02/19/2023", ExpirationDate: "02/19/2023", UserEmail: "Paulina.kedzior@novartis.com", UserTerritory: "X2503", MemberCertificate: "Xii135603", OrderDate: '02/19/2023', Order: '', lastName: "Veselinovic", firstName: "Aleksandra", Address: "2155 10TH AVE", City: "Calgary", Province: 'AB', postalCode: 'V5C6C1', Speciality: 'Ophthalmology/Ophtalmologie' },
            { id: 4, ProgramID: '1001', ProductName: "Xiidra", CountryCode: "CA", VoucherId: "X13561AB", DistributionDate: "02/19/2023", ExpirationDate: "02/19/2023", UserEmail: "philip.worng@novartis.com", UserTerritory: "X2503", MemberCertificate: "Xii135604", OrderDate: '02/19/2023', Order: '', lastName: "Iovieno", firstName: "Alfonso", Address: "2525 WILLOW ST", City: "Calgary", Province: 'AB', postalCode: 'V5C6C1', Speciality: 'Ophthalmology/Ophtalmologie' },
            { id: 5, ProgramID: '1001', ProductName: "Xiidra", CountryCode: "CA", VoucherId: "X13561AB", DistributionDate: "02/19/2023", ExpirationDate: "02/19/2023", UserEmail: "Paulina.kedzior@novartis.com", UserTerritory: "X2503", MemberCertificate: "Xii135605", OrderDate: '02/19/2023', Order: '', lastName: "Toor", firstName: "Charanpal", Address: "", City: "Calgary", Province: 'AB', postalCode: 'V5C6C1', Speciality: 'Optometry' },

        ]
    }
    excelData: any[]
    exportAsExcel() {
        console.log(this.inventoryList, 'Whole Data');
        this.excelData = [];
        this.inventoryList.forEach(element => {
            // var jobShortCode = element['jobShortCode'].toString();
            this.excelData.push({
                'ProgramID ': element['ProgramID'], 'ProductName': element['ProductName'], 'CountryCode': element['CountryCode'], 'VoucherId': element['VoucherId'], 'DistributionDate': element['DistributionDate'], 'ExpirationDate': element['ExpirationDate'], 'UserEmail': element['UserEmail'],
                'MemberCertificate ': element['MemberCertificate'], 'OrderDate ': element['OrderDate'], 'Order ': element['Order'], 'lastName ': element['lastName'], 'firstName ': element['firstName'], 'Address ': element['MemberCertifiAddresscate'], 'City ': element['City'], 'Province ': element['Province'], 'postalCode ': element['postalCode'], 'Speciality ': element['Speciality'],
                // 'Status' : element['status'] ? 'Active' : 'Inactive'
            })
        });
        console.log(this.excelData);
        this._downloadExcelService.exportAsExcelFile(this.excelData, 'Download CSV')
    }
    
    public exportCSVDialog() {
        let dialogRef = this.dialog.open(ExportCSVDialogComponent, {
            height: 'auto',
            width: '400px',
            autoFocus: false,

        });
        dialogRef.afterClosed().subscribe(data => {
        });
    }

    getUser() {
        this.tableList = null;
        this.usersService.getUser()
=======
    status = ["Active","Incative"];
    businessCenters = ["Core Health","Sapphire MD","Pain Allieviation","Centre for Pain Relief","Prime Orthopedics"];
    stepsOptionSelected: any;
    onStepsOptionsSelected(event){   
    }
    public settings: Settings;
    constructor(public appSettings: AppSettings,
        public dialog: MatDialog,
        public usersService: UsersService, private alertService: AlertService) {
            this.settings = this.appSettings.settings;
        }
        
        ngOnInit() {
            this.getUser();
        }
        
        getUser() {
            this.tableList = null;
            this.usersService.getUser()
>>>>>>> 424bab94b42de691b2fb230219ac1998a2fbe3a0
            .subscribe(
                data => {
                    this.tableList = data;
                    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
                    this.totalSize = 8;
                }
<<<<<<< HEAD
            )
    }


    public openUserDialog(id) {
        let dialogRef = this.dialog.open(UserDialogComponent, {
            data: id,
            height: 'auto',
            width: '600px'
        });
        dialogRef.afterClosed().subscribe(data => {
        });
    }

    public openUnitsAssignedDialog(id) {
        let dialogRef = this.dialog.open(UnitsassignedComponent, {
            data: id,
            height: 'auto',
            width: '300px'
        });
        dialogRef.afterClosed().subscribe(data => {
        });
    }
    public sendEmailDialog(id) {
        let dialogRef = this.dialog.open(SendemailDialogComponent, {
            data: id,
            height: 'auto',
            width: '600px'
        });
        dialogRef.afterClosed().subscribe(data => {
        });
    }


    deleteUser(userid) {

        this.tableList = this.tableList.filter(e => e.intApplicantId != userid)
        this.alertService.createAlert('Successfully deleted.', 1);
        console.log(this.tableList)
    }

    saveStatus() {
        //this.alertService.createAlert('Successfully saved.', 1);
    }

}
=======
                )
            }
            
            
            public openUserDialog(id) {
                let dialogRef = this.dialog.open(UserDialogComponent, {
                    data: id,
                    height: 'auto',
                    width: '600px',
                    autoFocus:false
                });
                dialogRef.afterClosed().subscribe(data => {
                });
            }
            
            public openPasswordResetDialog(item) {
                let dialogRef = this.dialog.open(ResetUserPasswordComponent, {
                    data: item,
                    height: 'auto',
                    width: '600px',
                    autoFocus:false
                });
                dialogRef.afterClosed().subscribe(data => {
                });
            }
            
            deleteUser(userid){
                
                this.tableList = this.tableList.filter(e=>e.intApplicantId != userid)
                this.alertService.createAlert('Successfully deleted.', 1);
                
            }
            
            saveStatus() {
                //this.alertService.createAlert('Successfully saved.', 1);
            }
            
            public handlePage(e: any) {
                this.currentPage = e.pageIndex;
                this.pageSize = e.pageSize;
                this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
            }
            
        }
>>>>>>> 424bab94b42de691b2fb230219ac1998a2fbe3a0
