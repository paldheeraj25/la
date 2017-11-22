import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take'

@Injectable()
export class AdvertisementDataService {

  private advertisementUrl = "http://localhost:5012/api/register";

  constructor(private http: Http) { }

  advertisementBroadcast(add: any) {
    console.log(add);
    //return this.http.post(this.advertisementUrl, add).map(res => res.json()).take(1);
  }
}
