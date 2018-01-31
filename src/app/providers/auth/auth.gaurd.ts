import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGaurd implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate (route : ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(!this.authService.isAuthenticated()){
      this.router.navigate(['./login']);
      return false;
    }
    return true;
  }

}