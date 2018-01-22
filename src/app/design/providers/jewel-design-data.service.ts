import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import { design } from "../model/design.model";
import 'rxjs/add/operator/take';

@Injectable()
export class JewelDesignDataService {

  private listUrl = environment.api + "design/jewels";
  constructor(private http: Http) { }

  listOfDesign() {
    return this.http.get(this.listUrl).map(res => res.json());
  }

  getDesigns(): Observable<Array<design>> {
    return this.http.get(this.listUrl).map(res => {
      return res.json();
    });
  }

}
