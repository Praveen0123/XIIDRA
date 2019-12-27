import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-referring-physician',
  templateUrl: './by-referring-physician.component.html',
  styleUrls: ['./by-referring-physician.component.scss']
})
export class ByReferringPhysicianComponent implements OnInit {

  filterToggle:boolean;

  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }

  constructor() { }

  ngOnInit() {
    this.filterToggle=true;
  }

}
