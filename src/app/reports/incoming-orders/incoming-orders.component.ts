import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incoming-orders',
  templateUrl: './incoming-orders.component.html',
  styleUrls: ['./incoming-orders.component.scss']
})
export class IncomingOrdersComponent implements OnInit {
  physcianList: any;
  constructor() { }
  

  imagePath = '../../../../assets/img/vendor/leaflet/page_under_construction.png';

  ngOnInit() {
    
  this.physcianList = [
    {id: '1' , AllelName: 'X13561AB' },
    {id: '2' , AllelName: 'X13561AB' },
    {id: '3' , AllelName: 'X13561AB' },
    
    ];
  }



  }
