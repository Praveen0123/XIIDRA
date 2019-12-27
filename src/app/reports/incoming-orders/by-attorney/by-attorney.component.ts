import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-attorney',
  templateUrl: './by-attorney.component.html',
  styleUrls: ['./by-attorney.component.scss']
})
export class ByAttorneyComponent implements OnInit {

  filterToggle:boolean;

  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }

  constructor() { }

  ngOnInit() {
    this.filterToggle=true;
  }

}
