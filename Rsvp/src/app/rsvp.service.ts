import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Root{
  records:Record[];
}

export interface Record{
  createdTime?:string;
  fields:Registration;
  id?:string
}

export interface Registration{
  isComing:boolean;
  bringAnotherPerson:boolean;
  firstPersonName:string;
  comment?:string;
  secondPersonName?:string;
}

@Injectable({
  providedIn: 'root'
})

export class RsvpService {

  constructor(private http:HttpClient) { }

  public getGuests(): Observable<Root>{
    return this.http.get<Root>('https://api.airtable.com/v0/appToLktCco8QwJIw/Rsvp',{headers: new HttpHeaders({Authorization: 'Bearer patx8oTy79QdbgOtY.439ae6c73a4cc11464deb0a70921214d7711a0d3c51142e3775b8a48ec9e6547'})});
  }

  public addGuest(registration:Registration):Observable<Root>{

    let options = {headers: new HttpHeaders({Authorization: 'Bearer patx8oTy79QdbgOtY.439ae6c73a4cc11464deb0a70921214d7711a0d3c51142e3775b8a48ec9e6547'})};
    let body:Root = {records: [{
      fields: registration
    }
    ]};

    return this.http.post<Root>('https://api.airtable.com/v0/appToLktCco8QwJIw/Rsvp', body, options);
  }
}
