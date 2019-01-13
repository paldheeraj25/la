import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { APIService } from './../../shared/api.service';

import 'rxjs/Observable';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class FlowerService {
  private url = "https://dry-plateau-78185.herokuapp.com/api/chatfuel/flower/dashboard/upload";
  private flowerListUrl = "https://dry-plateau-78185.herokuapp.com/api/dashboard/flower/list";
  private flowerOrdersUrl = "https://dry-plateau-78185.herokuapp.com/api/dashboard/flower/orders";

  constructor(private http: Http, private apiService: APIService) { console.log('flower service loded') }

  uploadProduct(flower: any): Observable<any> {
    return this.apiService.createOne(this.url, flower)
  }

  getFlowerList(): Observable<any> {
    return this.apiService.getAll(this.flowerListUrl, {}).map(res => {
      return res;
    });
  }

  getFlowerOrders(): Observable<any> {
    return this.apiService.getAll(this.flowerOrdersUrl, {}).map(res => {
      return res;
    });
  }
}
