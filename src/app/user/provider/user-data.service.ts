import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { Product } from "../interfaces/product";


@Injectable()
export class UserDataService {
  private createUrl = environment.api + "register";
  private listUrl = environment.api + "users";
  private deleteUrl = environment.api + "users";
  constructor(private http: Http) { }

  create(user: any) {
    return this.http.post(this.createUrl, user).map(res => res.json()).take(1);
  }

  list() {
    return this.http.get(this.listUrl).map(res => res.json());
  }

  delete(user: any) {
    return this.http.delete(this.deleteUrl + "/" + user._id);
  }

}
