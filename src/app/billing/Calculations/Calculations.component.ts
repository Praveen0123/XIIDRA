import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Calculations',
  templateUrl: './Calculations.component.html',
  styleUrls: ['./Calculations.component.scss']
})
export class CalculationsComponent implements OnInit {

  List:any;

  imagePath = '../../../../assets/img/vendor/leaflet/page_under_construction.png';  
  
  constructor() {
    }
  ngOnInit() {
    this.List=[
      {id:"1",resultName:"Result 1",var1:["DRI","SEQ","Messages()","Algo()","-","-"],operator:["GT","LT","GE","LE","EQ","NEQ"],var2:["DRI","SEQ","Messages()","Algo()","Constant","-"],then:["TRUE","TRUE","TRUE","FALSE","TRUE","FALSE"],else:["FALSE","FALSE","FALSE","TRUE","FALSE","TRUE"],resultValue:["0","NULL","NULL","0","NULL","0"] },
      {id:"2",resultName:"Result 2",var1:["DRI","SEQ","Messages()","Algo()","-","-"],operator:["GT","LT","GE","LE","EQ","NEQ"],var2:["DRI","SEQ","Messages()","Algo()","Constant","-"],then:["TRUE","TRUE","TRUE","FALSE","TRUE","FALSE"],else:["FALSE","FALSE","FALSE","TRUE","FALSE","TRUE"],resultValue:["0","NULL","NULL","0","NULL","0"] }
    ]
  }
}
