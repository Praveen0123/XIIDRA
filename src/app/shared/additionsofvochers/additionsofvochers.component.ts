import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';


@Component({
  selector: 'app-additionsofvochers',
  templateUrl: './additionsofvochers.component.html',
  styleUrls: ['./additionsofvochers.component.scss']
})
export class AdditionsofvochersComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<AdditionsofvochersComponent>,
    public alertService : AlertService,
    public fb : FormBuilder,) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

}
