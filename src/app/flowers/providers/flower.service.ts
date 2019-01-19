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
  private domainUrl: string = "http://pinnacle.lewiot.com:5012";
  private url: string = this.domainUrl + "/api/chatfuel/flower/dashboard/upload";
  private flowerListUrl: string = this.domainUrl + "/api/dashboard/flower/list?person=";
  private getFlowerUrl: string = this.domainUrl + "/api/dashboard/flower/select?";
  private updateFlowerUrl: string = this.domainUrl + "/api/dashboard/flower/select/edit/";
  private flowerOrdersUrl = this.domainUrl + "/api/dashboard/flower/orders";
  public personType: string = 'null';

  constructor(private http: Http, private apiService: APIService) { console.log('flower service loded') }

  uploadProduct(flower: any): Observable<any> {
    return this.apiService.createOne(this.url, flower)
  }

  getFlowerList(person: string): Observable<any> {
    return this.apiService.getAll(this.flowerListUrl + person, {}).map(res => {
      return res;
    });
  }

  getFlower(flowerQuery: string): Observable<any> {
    return this.apiService.getOne(this.getFlowerUrl, flowerQuery).map(res => {
      return res;
    });
  }

  updateFlower(id: string, data: any): Observable<any> {
    return this.apiService.createOne(this.updateFlowerUrl + id, data).map(res => {
      return res;
    });
  }
  getFlowerOrders(): Observable<any> {
    return this.apiService.getAll(this.flowerOrdersUrl, {}).map(res => {
      return res;
    });
  }
}
