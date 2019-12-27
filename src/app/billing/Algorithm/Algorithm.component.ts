import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddAlgorithmComponent } from './addAlgorithm/addAlgorithm.component';

@Component({
  selector: 'app-Algorithm',
  templateUrl: './Algorithm.component.html',
  styleUrls: ['./Algorithm.component.scss']
})
export class AlgorithmComponent implements OnInit {

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
      {id:"1",Test:"LCD TEST",AllelName:"RS ID",Parameter:"GENE"},
      {id:"2",Test:"LCD TEST",AllelName:"rs121908936",Parameter:"LCT"},
      {id:"3",Test:"TPK1 TEST",AllelName:"RS ID",Parameter:"GENE"},
      {id:"4",Test:"TPK1 TEST",AllelName:"rs228584",Parameter:"TPK1"},
      {id:"5",Test:"ADA TEST",AllelName:"RS ID",Parameter:"TPK1"},
      {id:"6",Test:"ADA TEST",AllelName:"rs6031682",Parameter:"ADA"},
      {id:"7",Test:"CHOLINE TEST",AllelName:"RS ID",Parameter:"GENE"},
      {id:"8",Test:"CHOLINE TEST",AllelName:"rs7946",Parameter:"PEMT"},
      {id:"9",Test:"CHOLINE TEST",AllelName:"rs7639752",Parameter:"PCYT1A"},
      {id:"10",Test:"CHOLINE TEST",AllelName:"rs6445606",Parameter:"CHDH"},
      {id:"11",Test:"CHOLINE TEST",AllelName:"rs3764897",Parameter:"PLD2"},
    ]
  }

  public addAlgorithmDialog() {
    let dialogRef = this.dialog.open(AddAlgorithmComponent, {
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
