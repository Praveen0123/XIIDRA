import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessagesComponent } from '../Messages.component';


@Component({
    selector: 'app-addMessage',
    templateUrl: './addMessage.component.html',
    styleUrls: ['./addMessage.component.scss']
  })

  export class AddMessageComponent implements OnInit {

    // @Input() List:any;
    List:any;
    

    constructor(
                public dialogRef: MatDialogRef<AddMessageComponent>,
                public fb : FormBuilder,
                ) { }
  ngOnInit() {
    this.List = ["rs121908936","rs228584","rs6031682"]
  }

  saveOrder() {
    // this.alertService.createAlert('PatientData added successfully.', 1);
    this.dialogRef.close();
  }
  
  close(): void {
    this.dialogRef.close();
  }
  
  }