import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
// import { AlertService } from 'src/app/shared/services/alert.service';
import { UploadCSVComponent } from './uploadCSV/uploadCSV.component';

@Component({
  selector: 'app-SeqResults',
  templateUrl: './SeqResults.component.html',
  styleUrls: ['./SeqResults.component.scss']
})
export class SeqResultsComponent implements OnInit {

  List: any;

  imagePath = '../../../../assets/img/vendor/leaflet/page_under_construction.png';  
  
  constructor( public dialog: MatDialog,) {
    }
  ngOnInit() {
    this.List = [
      {id: "1" , AllelName: "rs4846048", Ref:"G", Variant:"A", AllelCall:"Heterozygous"  },
      {id: "2" , AllelName: "rs1537514", Ref:"G", Variant:"C", AllelCall:"Abest" },
      {id: "3" , AllelName: "rs868014", Ref:"A", Variant:"G", AllelCall:"Homozygous" },
      {id: "4" , AllelName: "rs2274976", Ref:"C", Variant:"T", AllelCall:"Absent" },
      {id: "5" , AllelName: "tvc.novel.1", Ref:"G", Variant:"C", AllelCall:"Heterozygous" },
      {id: "6" , AllelName: "tvc.novel.2", Ref:"G", Variant:"A", AllelCall:"Homozygous" },
      {id: "7" , AllelName: "rs1801131", Ref:"T", Variant:"G", AllelCall:"Homozygous" }
    ]
  }

  public uploadCSVDialog() {
    let dialogRef = this.dialog.open(UploadCSVComponent, {
      height: 'auto',
      width: '400px',
      autoFocus: false,
      
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

}