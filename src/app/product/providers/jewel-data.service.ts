import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

import { Jewel } from "../interfaces/jewel";

@Injectable()
export class JewelDataService {

  private jewelSaveUrl = environment.api + "jewel";
  public imageStorage = environment.api + "uploadImage";
  public jewel = environment.api + "jewel";
  public getJewel = environment.api + "jewel/";

  constructor(private http: Http) { }

  saveJewel(jewel: Jewel) {
    return this.http.post(this.jewelSaveUrl, jewel).map(res => {
      return res.json();
    });
  }

  getJewelByCodeId(id: string) {
    return this.http.get(this.getJewel + id).map(res => {
      return res.json();
    });
  }

  updateJewel(jewel: Jewel) {
    return this.http.put(this.jewel, jewel).map(res => {
      return res.json();
    });
  }

  getJewels(): Observable<Array<Jewel>> {
    return this.http.get(this.jewel).map(res => {
      return res.json();
    });
  }

}
