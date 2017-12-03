import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthService {

  private loginUrl: string = environment.api + 'login';

  constructor(private http: Http) { }

  login(user) {
    return this.http.post(this.loginUrl, user).map(res => res.json()).take(1);
  }

  logout() {
    return this.http.get(environment.api + 'logout').map(res => res.json()).take(1);
  }
}
