import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { AddAttorneyComponent } from './add-attorney/add-attorney.component';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-attorneys',
  templateUrl: './attorneys.component.html',
  styleUrls: ['./attorneys.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AttorneysComponent implements OnInit {

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
            {id:1 , attorney:"THE GAGLIARDI LAW FIRM" , state:"New York" , city : "San Francisco" , status:true , email:"fabrice@gmail.com" , phone:"408-444-0058", faxNumber:"+1-210-369-5487", address:"4151 SOUTHWEST FRWY., STE 780"},
            {id:2 , attorney:"CARLIE E YOUNG LAW FIRM" , state:"New Jersey" , city : "Los Angeles" , status:true , email:"fabrice@gmail.com" , phone:"417-424-2147", faxNumber:"+1-110-368-5457", address:"3601 NAVIGATION BLVD"},
            {id:3 , attorney:"PUSCH & NGUYEN LAW FIRM" , state:"Texas" , city : "Chicago" , status:true , email:"fabrice@gmail.com" , phone:"257-697-2158", faxNumber:"+1-210-369-1523", address:"4441 W. AIRPORT FRWY., SUITE 200"},
            {id:4 , attorney:"AUDIA JONES LAW FIRM" , state:"Virginia" , city : "Boston" , status:true , email:"fabrice@gmail.com" , phone:"657-278-0321", faxNumber:"+1-456-369-5487", address:"777 POST OAK BLVD., SUITE 450"},
            {id:5 , attorney:"ROMERO & ASSOCIATES" , state:"Vermont" , city : "Austin" , status:true , email:"fabrice@gmail.com" , phone:"910-217-6974", faxNumber:"+1-210-455-5487", address:"4425 S. MOPAC EXPRESSWAY, #600"},
        ]
    }
    

    public openAttorneyDialog(id) {
      let dialogRef = this.dialog.open(AddAttorneyComponent, {
          data: id,
          height: 'auto',
          width: '600px',
          autoFocus:false
      });
      dialogRef.afterClosed().subscribe(data => {
      });
  }

  public openConfirmDialog(action,attorney,name) {
   
        let dialogRef = this.dialog.open(ConfirmDialogComponent, {
            data:{'action':action,'value':1,'name':name}
        });
        dialogRef.afterClosed().subscribe(res => {
        });
    
}

  deleteAttorney(){
    //this.alertService.createAlert('Successfully deleted.', 1);
}

}
