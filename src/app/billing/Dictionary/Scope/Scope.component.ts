import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ViewCertificatesComponent } from './view-certificates/view-certificates.component';

@Component({
// tslint:disable-next-line: component-selector
selector: 'app-Scope',
templateUrl: './Scope.component.html',
styleUrls: ['./Scope.component.scss']
})
export class ScopeComponent implements OnInit {

List: any;
vouchersList: any;


imagePath = '../../../../assets/img/vendor/leaflet/page_under_construction.png';

constructor(public dialog: MatDialog) {
}
ngOnInit() {
this.List = [
{id: '1' , AllelName: 'X13561AB' },
{id: '2' , AllelName: 'X13561AB' },
{id: '3' , AllelName: 'X13561AB' },
{id: '4' , AllelName: 'X13561AB' },
{id: '5' , AllelName: 'X13561AB' },
{id: '6' , AllelName: 'X13561AB' },
{id: '7' , AllelName: 'X13561AB' }
];


this.vouchersList = [
{id: '1' , VoucherId: 'X13561AB', DistributionDate: '02/19/2023', ExpirationDate: '02/19/2023'},
{id: '2' , VoucherId: 'X13561AB', DistributionDate: '02/19/2023', ExpirationDate: '02/19/2023'},
{id: '3' , VoucherId: 'X13561AB', DistributionDate: '02/19/2023', ExpirationDate: '02/19/2023'},
{id: '4' , VoucherId: 'X13561AB', DistributionDate: '02/19/2023', ExpirationDate: '02/19/2023'},
{id: '5' , VoucherId: 'X13561AB', DistributionDate: '02/19/2023', ExpirationDate: '02/19/2023'},
];
}

public viewCertificates(id) {
const dialogRef = this.dialog.open(ViewCertificatesComponent, {
data: id,
height: 'auto',
width: '600px'
});
}
}