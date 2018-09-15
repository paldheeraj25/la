import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  private loginUrl: string = environment.api + 'login';
  private likedinUrl: string = environment.api + 'linkedin';

  constructor(private http: Http) { }

  login(user) {
    return this.http.post(this.loginUrl, user).map(res => res.json()).take(1);
  }

  linkedinLogin(user): Observable<any> {
    return this.http.post(this.likedinUrl, user).map(res => res.json()).take(1);
  }

  logout() {
    return this.http.get(environment.api + 'logout').map(res => res.json()).take(1);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('key');
    return (token !== null);
  }
}
