import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddDRIComponent } from './addDRI/addDRI.component';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-DRI',
  templateUrl: './DRI.component.html',
  styleUrls: ['./DRI.component.scss']
})
export class DRIComponent implements OnInit {

  List:any;
  imagePath = '../../../../assets/img/vendor/leaflet/page_under_construction.png';  
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

  constructor(public dialog: MatDialog,private alertService : AlertService) {
    }
  ngOnInit() {
    this.List = [
      {id: "1" , AgeThreshold: "Pregnant Max 30", Apa:"3", Carbohydrates:"175", Fiber:"28" , linolenic: "13", A_linolenic: "1,4", Protein:"71", Vitamin_A: "770",Vitamin_C: "85" },
      {id: "2" , AgeThreshold: "Pregnant Below 30", Apa:"3", Carbohydrates:"175", Fiber:"28" , linolenic: "13", A_linolenic: "1,4", Protein:"71", Vitamin_A: "770",Vitamin_C: "85" },
      {id: "3" , AgeThreshold: "Lactate Max 30", Apa:"3,8", Carbohydrates:"210", Fiber:"29" , linolenic: "13", A_linolenic: "1,3", Protein:"71", Vitamin_A: "1300",Vitamin_C: "120" },
      {id: "4" , AgeThreshold: "Lactate Below 30", Apa:"3,8", Carbohydrates:"210", Fiber:"29" , linolenic: "13", A_linolenic: "1,3", Protein:"71", Vitamin_A: "1300",Vitamin_C: "120" },
      {id: "5" , AgeThreshold: "Female Max 50", Apa:"2,7", Carbohydrates:"130", Fiber:"25" , linolenic: "12", A_linolenic: "1,1", Protein:"46", Vitamin_A: "700",Vitamin_C: "75" },
      {id: "6" , AgeThreshold: "Female > 50", Apa:"2,7", Carbohydrates:"130", Fiber:"21" , linolenic: "11", A_linolenic: "1,1", Protein:"46", Vitamin_A: "700",Vitamin_C: "75" },
      {id: "7" , AgeThreshold: "Male Max 50", Apa:"3,7", Carbohydrates:"130", Fiber:"38" , linolenic: "17", A_linolenic: "1,6", Protein:"56", Vitamin_A: "900",Vitamin_C: "90" },
      {id: "8" , AgeThreshold: "Male > 50", Apa:"3,7", Carbohydrates:"130", Fiber:"30" , linolenic: "14", A_linolenic: "1,6", Protein:"56", Vitamin_A: "900",Vitamin_C: "90" },
    ]
  }

  public addDriDialog() {
    let dialogRef = this.dialog.open(AddDRIComponent, {
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
