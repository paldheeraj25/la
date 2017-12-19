import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { environment } from '../../../environments/environment';
import { Observable } from "rxjs/observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AdvertisementDataService {

  public addUrl: string = environment.api;
  constructor(private http: Http) { }

  saveAd(ad: any) {
    return this.http.post(this.addUrl + 'advertisement', ad).map(res => {
      return res.json();
    });
  }

  advertisementBroadcast(add: any) {
    console.log(add);
    //return this.http.post(this.advertisementUrl, add).map(res => res.json()).take(1);
  }

}
