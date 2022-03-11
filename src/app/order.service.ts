/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://172.20.10.10:8080/api/orders';

export interface Orders {
  no?: any;
  name?: any;
  type?: any;
  buysale?: any;
  price?: any;
  quantity?: any;
  total?: any;
}

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  constructor(private http: HttpClient) { }

  fetchorder() {
    return this.http.get<Orders[]>(baseUrl);
  }

  getAll(): Observable<Orders[]> {
    return this.http.get<Orders[]>(baseUrl);
  }

  get(id: any): Observable<Orders[]> {
    return this.http.get<Orders[]>(`${baseUrl}/${id}`);
  }

  create(entryorder: Orders): Observable<Orders[]>{
    const headers = {'Content-Type':'application/json'};
    const body=JSON.stringify(entryorder);
    return this.http.post<Orders[]>(baseUrl+'/addorder', body,{headers});
  }

  update(id: any, data: any): Observable<Orders[]>{
    return this.http.put<Orders[]>(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<Orders[]>{
    return this.http.delete<Orders[]>(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<Orders[]> {
    return this.http.delete<Orders[]>(baseUrl);
  }

}
