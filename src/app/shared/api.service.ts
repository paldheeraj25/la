import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class APIService {

  private headers: any = {};
  constructor(private http: Http) {
    this.headers.Authorization = localStorage.getItem('Authorization');
  }


  getAll(url: string, params: any): Observable<any> {
    return this.http.get(url, {
      headers: this.headers,
      params: params
    }).map(res => {
      return res.json();
    });
  }

  getOne(url: string, id: string): Observable<any> {
    return this.http.get(url + id).map(res => {
      return res.json();
    });
  }

  createOne(url: string, data: any): Observable<any> {
    return this.http.post(url, data).map(res => {
      return res.json();
    });
  }

  updateOne(url: string, data: any): Observable<any> {
    return this.http.put(url, data).map(res => {
      return res.json();
    });
  }

}
