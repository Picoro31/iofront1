
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { HTTP } from '@awesome-cordova-plugins/http/ngx';

const loginUrl = 'http://172.20.10.10:8080/api/login';

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface login {
  username?: any;
  password?: any;
  img?: any;
  email?: any;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  fetch() {
    return this.http.get<login[]>(loginUrl);
  }

  getAll(): Observable<login[]> {
    return this.http.get<login[]>(loginUrl);
  }

  create(entry: login): Observable<login[]>{
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const headers = {'Content-Type':'application/json'};
    const body=JSON.stringify(entry);
    return this.http.post<login[]>(loginUrl+'/addlogin', body,{headers});
  }

  delete(user: any): Observable<login[]>{
    return this.http.delete<login[]>(`${loginUrl}/${user}`);
  }




}
