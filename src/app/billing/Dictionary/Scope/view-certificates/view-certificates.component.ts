import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
selector: 'app-view-certificates',
templateUrl: './view-certificates.component.html',
styleUrls: ['./view-certificates.component.scss']
})
export class ViewCertificatesComponent implements OnInit {

certificatesList: any;

constructor(public dialogRef: MatDialogRef<ViewCertificatesComponent>,
@Inject(MAT_DIALOG_DATA) public user: number,
private alertService: AlertService) { }

ngOnInit() {
this.certificatesList = [
{id: '1' , VoucherId: 'X13561AB', CertificateId: 'Xii070701', ExpirationDate: '02/19/2023'},
{id: '2' , VoucherId: 'X13561AB', CertificateId: 'Xii070702', ExpirationDate: '02/19/2023'},
{id: '3' , VoucherId: 'X13561AB', CertificateId: 'Xii070703', ExpirationDate: '02/19/2023'},
{id: '4' , VoucherId: 'X13561AB', CertificateId: 'Xii070704', ExpirationDate: '02/19/2023'},
{id: '5' , VoucherId: 'X13561AB', CertificateId: 'Xii070705', ExpirationDate: '02/19/2023'},
];
}
close(): void {
this.dialogRef.close();
}
}