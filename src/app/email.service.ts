/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const mailUrl = 'http://172.20.10.10:8080/sendmail';

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface usermail {
  from?: any;
  to?: any;
  subject?: any;
  text?: any;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  fetchemail() {
    return this.http.get<usermail[]>(mailUrl);
  }

  create(entryemail: usermail): Observable<usermail[]>{
    const headers = {'Content-Type':'application/json'};
    const body=JSON.stringify(entryemail);
    return this.http.post<usermail[]>(mailUrl, body,{headers});
  }

}
