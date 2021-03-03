import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const URL = 'http://localhost:8000/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  contact(data): Observable<any> {
    return this.http.post(URL + 'addcontact/',{
      name:data.name,
      nickname:data.nickname,
      phonenumber:data.phonenumber,
      dob:data.dob,
      Language:data.Language


    }, httpOptions);
  }
}
