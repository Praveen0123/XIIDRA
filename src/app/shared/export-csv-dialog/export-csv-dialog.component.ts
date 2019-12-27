import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-export-csv-dialog',
  templateUrl: './export-csv-dialog.component.html',
  styleUrls: ['./export-csv-dialog.component.scss']
})
export class ExportCSVDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ExportCSVDialogComponent>,
               public alertService : AlertService,
               public fb : FormBuilder,) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

}
