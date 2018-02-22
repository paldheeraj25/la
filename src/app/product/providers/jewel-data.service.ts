import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Jewel } from '../interfaces/jewel';
import { APIService } from './../../shared/api.service';

@Injectable()
export class JewelDataService {

  private jewelSaveUrl = environment.api + 'jewel'
  public imageStorage = environment.api + 'uploadImage';
  public jewel = environment.api + 'jewel';
  public getJewel = environment.api + 'jewel/';

  constructor(private http: Http, private apiService: APIService) { }

  saveJewel(jewel: Jewel) {
    return this.apiService.createOne(this.jewelSaveUrl, jewel).map(res => {
      return res;
    });
  }

  getJewelByCodeId(id: string) {
    return this.apiService.getOne(this.getJewel, id).map(res => {
      return res;
    });
  }

  updateJewel(jewel: Jewel) {
    return this.apiService.updateOne(this.jewelSaveUrl, jewel).map(res => {
      return res;
    });
  }

  getJewels(offset, limit): Observable<Array<Jewel>> {
    const params = { offset, limit };
    return this.apiService.getAll(this.jewel, params).map(res => {
      return res;
    });
  }

  updateTap() {

  }
}
