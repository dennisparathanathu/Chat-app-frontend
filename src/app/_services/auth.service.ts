import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

const URL = 'http://localhost:8000/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data): Observable<any> {
    return this.http.post(URL + 'api/login/',{
      username:data.username,
      password:data.password
    }, httpOptions);
  }
  register(data): Observable<any> {
    return this.http.post(URL + 'api/register/', {data}, httpOptions);
  }
  getuserdetails(): Observable<any> {
    return this.http.get(URL +'getuserdetails/');

  }
  getallusers(): Observable<any> {
    return this.http.get(URL +'getallusers/');

  }
  getsingleusers(id): Observable<any> {
    return this.http.get(URL +'getsingleusers/'+id);

  }
  message(data): Observable<any> {
    return this.http.post(URL +'message/',{data},httpOptions);

  }
  additionaluserdetails(data): Observable<any> {
    return this.http.post(URL +'profileupdate',{data},httpOptions);

  }
  getmessages(sid,rid): Observable<any> {
    return this.http.get(URL +'getmessages/'+sid+'/'+rid);

  }

  


}
