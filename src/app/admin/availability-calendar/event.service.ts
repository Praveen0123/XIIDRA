import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public getEvents(): Observable<any> {
    const dateObj = new Date();
    const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
    let data: any = [{
        id:989,
        title: 'Discussion with Blue Stone India',
        start: '2019-08-27T06:00:00',
        end: '2019-08-27T06:10:00',
        allDay : false
    },
    {
        id:989,
        title: 'Discussion with Axess India',
        start: '2019-08-27T06:20:00',
        end: '2019-08-27T06:30:00',
        color:'grey',
        allDay : false
    },
    {
        id:989,
        title: 'Discussion with Axess India',
        start: '2019-08-27T06:50:00',
        color:'grey',
        allDay : false
    },
    {
        id:989,
        title: 'Discussion with Axess India',
        start: '2019-08-11T17:30:00',
        color:'grey',
        allDay : false
    },
    {
        id:989,
        title: 'Discussion with Axess India',
        start: '2019-08-11T17:30:00',
        color:'grey',
        allDay : false
    },
    {
        id:989,
        title: 'Discussion with Axess India',
        start: '2019-08-11T17:30:00',
        color:'grey',
        allDay : false
    },
    {
        id:989,
        title: 'Discussion with Axess India',
        start: '2019-08-11T17:30:00',
        color:'grey',
        allDay : false
    },
    {
        id:989,
        title: 'Discussion with Axess India',
        start: '2019-08-11T17:30:00',
        color:'grey',
        allDay : false
    },
    {
        id:989,
        title: 'Discussion with Axess India',
        start: '2019-08-11T17:30:00',
        color:'grey',
        allDay : false
    },
    {
        id:989,
        title: 'Discussion with Axess India',
        start: '2019-08-11T17:30:00',
        color:'grey',
        allDay : false
    },
    {
        id:989,
        title: 'Discussion with Axess India',
        start: '2019-08-11T17:30:00',
        color:'grey',
        allDay : false
    },
    {
        id:989,
        title: 'Discussion with Axess India',
        start: '2019-08-11T17:30:00',
        color:'grey',
        allDay : false
    },
    {
        id:989,
        title: 'Discussion with Axess India',
        start: '2019-08-11T17:30:00',
        color:'grey',
        allDay : false
    },
    {
        id: 999,
        title: 'Discussion with SKY',
        start: '2019-08-19T12:30:00',
        color:'#50636d',
        allDay : false
    },
    {
        id: 999,
        title: 'Discussion with SIR',
        start: yearMonth + '-13',
        color:'#50636d',
        allDay : false
    },
    {
        id:989,
        title: 'Discussion with F2O',
        start: yearMonth + '-14',
        allDay : false
    },
    {
        id:989,
        title: 'Discussion with Blue Stone India',
        start: yearMonth + '-12',
        allDay : false
    },
    {
        id:989,
        title: 'Discussion with SIR',
        start: yearMonth + '-28',
        allDay : false
    }];
   
    return of(data);
}
}
