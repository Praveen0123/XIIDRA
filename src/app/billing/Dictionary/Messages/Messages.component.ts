import { Component, OnInit  } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddMessageComponent } from './addMessage/addMessage.component';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-Messages',
  templateUrl: './Messages.component.html',
  styleUrls: ['./Messages.component.scss']
})
export class MessagesComponent implements OnInit {

  List:any;
 
  imagePath = '../../../../assets/img/vendor/leaflet/page_under_construction.png';  
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

  constructor(public dialog: MatDialog,private alertService : AlertService) {
    }
  ngOnInit() {
    this.List = [
      {id:"1",AlleleName:"rs121908936",Condition:"LCT",Combination:"A/A",Guideline:"This genotype is normal."},
      {id:"2",AlleleName:"rs121908936",Condition:"LCT",Combination:"T/T",Guideline:"This genotype associates with congenital lactase deficiency. You will deinitely transmit a copy of the mutation to your child"},
      {id:"3",AlleleName:"rs121908936",Condition:"LCT",Combination:"A/T",Guideline:"Having this genotype, You can transmit a copy of the mutation to your"},
      {id:"4",AlleleName:"rs228584",Condition:"TPK1",Combination:"C/C",Guideline:"This maternal genotype requires in increase intake of Thiamine(Vitamin B1) during pregnancy and breastfeeding."},
      {id:"5",AlleleName:"rs228584",Condition:"TPK1",Combination:"C/T",Guideline:"This maternal genotype requires in increase intake of Thiamine(Vitamin B1) during pregnancy and breastfeeding."},
      {id:"6",AlleleName:"rs228584",Condition:"TPK1",Combination:"T/T",Guideline:"This maternal genotype does not change the standard recommendations for Thiamine (Vitamin B1) intake during pregnancy and breastfeeding."},
      {id:"7",AlleleName:"rs6031682",Condition:"ADA",Combination:"G/G",Guideline:"This maternal genotype requires no action regarding Adenosine intake during pregnancy and breastfeeding."},
      {id:"7",AlleleName:"rs6031682",Condition:"ADA",Combination:"G/C",Guideline:"This maternal genotype requires no action regarding Adenosine intake during pregnancy and breastfeeding."},
      {id:"7",AlleleName:"rs6031682",Condition:"ADA",Combination:"C/C",Guideline:"This maternal genotype requires a reduction of Adenosine intake from foods, during pregnancy and breastfeeding."},
    ]
  }

  public addMessageDialog() {
    let dialogRef = this.dialog.open(AddMessageComponent, {
      height: 'auto',
      width: '600px',
      autoFocus: false,
      
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  deletePatientOrder(){
    this.alertService.createAlert('Successfully deleted.', 1);       
  }

}
