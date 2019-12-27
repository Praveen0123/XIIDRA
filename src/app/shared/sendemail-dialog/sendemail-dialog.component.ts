import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sendemail-dialog',
  templateUrl: './sendemail-dialog.component.html',
  styleUrls: ['./sendemail-dialog.component.scss']
})
export class SendemailDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<SendemailDialogComponent>,
    public alertService : AlertService,
    public fb : FormBuilder,) { }

  ngOnInit() {
  }
   

  close(): void {
    this.dialogRef.close();
  }
}
