import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RsvpService, Record, Registration } from '../rsvp.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent{
  public registration:Registration;
  constructor(public service:RsvpService){
    this.registration = {firstPersonName:'', isComing:false, bringAnotherPerson:false,comment:'',secondPersonName:'' };
  }

}
