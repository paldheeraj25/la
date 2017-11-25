import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthService {

  private loginUrl: string = 'http://localhost:5012/api/login';

  constructor(private http: Http) { }

  login(user){
    return this.http.post('http://localhost:5012/api/login', user).map(res => res.json()).take(1);
  }

  logout() {
    return this.http.get('http://localhost:5012/api/logout').map(res => res.json()).take(1);
  }
}
