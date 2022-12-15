import { Component, OnInit } from '@angular/core';
import { RsvpService, Record } from '../rsvp.service';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit{
  public records:Record[];
  constructor(public service:RsvpService){
    this.records = [];
  }

  ngOnInit(){
    this.service.getGuests().subscribe(item =>  this.records = item.records)
  }

  public countGuests():number{
    let guests = 0;

    for (const record of this.records) {
       if(record.fields.isComing){
        guests++;
        if(record.fields.bringAnotherPerson){
          guests++;
        }
       }
    }
    return guests;
  }
}
