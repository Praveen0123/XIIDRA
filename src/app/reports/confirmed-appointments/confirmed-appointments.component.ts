import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmed-appointments',
  templateUrl: './confirmed-appointments.component.html',
  styleUrls: ['./confirmed-appointments.component.scss']
})
export class ConfirmedAppointmentsComponent implements OnInit {

  filterToggle:boolean;

  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }

  constructor() { }

  ngOnInit() {
    this.filterToggle = true;
  }

}
