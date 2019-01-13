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
  private url: string = "https://dry-plateau-78185.herokuapp.com/api/chatfuel/flower/dashboard/upload";
  private flowerListUrl: string = "https://dry-plateau-78185.herokuapp.com/api/dashboard/flower/list";
  private getFlowerUrl: string = "https://dry-plateau-78185.herokuapp.com/api/dashboard/flower/select?id=";
  private updateFlowerUrl: string = "https://dry-plateau-78185.herokuapp.com/api/dashboard/flower/select/edit/";
  constructor(private http: Http, private apiService: APIService) { console.log('flower service loded') }

  uploadProduct(flower: any): Observable<any> {
    return this.apiService.createOne(this.url, flower)
  }

  getFlowerList(): Observable<any> {
    return this.apiService.getAll(this.flowerListUrl, {}).map(res => {
      return res;
    });
  }

  getFlower(id: string): Observable<any> {
    return this.apiService.getOne(this.getFlowerUrl, id).map(res => {
      return res;
    });
  }

  updateFlower(id: string, data: any): Observable<any> {
    return this.apiService.createOne(this.updateFlowerUrl + id, data).map(res => {
      return res;
    });
  }
}
