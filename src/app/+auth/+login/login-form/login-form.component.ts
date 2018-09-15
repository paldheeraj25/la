import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../providers/auth/auth.service";
import { Router } from "@angular/router";
import { RoleBaseService } from '../../../shared/service/role-base.service';
import { LinkedInService } from 'angular-linkedin-sdk';

@Component({
  selector: 'auth-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public error: Boolean = false;
  public roles: string[] = ["student", "company"];
  public isUserAuthenticated;

  constructor(private router: Router,
    private authService: AuthService,
    private role: RoleBaseService,
    private _linkedInService: LinkedInService
  ) {

  }

  ngOnInit() {
  }

  submitted = false;

  onSubmit(user) {
    this.submitted = true;
    this.authService.login(user).subscribe(result => {
      this.error = false;
      localStorage.setItem('key', result.token);
      localStorage.setItem('Authorization', "Bearer " + result.token);
      user.role = 'company';
      // setting the role for menu.
      this.role.setRole(user.role);

      // should come from backend.
      switch (user.role) {
        case 'college':
          this.router.navigate(['/home/college']);
          break;
        case 'company':
          this.router.navigate(['/home/company']);
          break;
        case 'student':
          this.router.navigate(['/home/student']);
          break;
      }

    }, error => {
      this.error = true;
    });
  }

  public subscribeToisInitialized() {
    this._linkedInService.isInitialized$.subscribe({
      next: (state) => {
        // state will always return true when API finishes loading
        console.log(state);
      },
      complete: () => {
        // Completed
      }
    });
  }

  public subscribeToLogin() {
    this._linkedInService.login().subscribe({
      next: (state) => {
        // state will always return true when login completed 
        console.log(state);
      },
      complete: () => {
        // Completed
      }
    });
  }

  public rawApiCall() {
    const url = '/people/~?format=json';
    this._linkedInService.raw(url)
      .asObservable()
      .subscribe({
        next: (data: any) => {
          console.log(data);
          if (data.id) {
            this.authService.linkedinLogin(data).subscribe(result => {
              this.error = false;
              localStorage.setItem('key', result.token);
              localStorage.setItem('Authorization', "Bearer " + result.token);
              //hard coded for now
              data.role = 'company';
              // setting the role for menu.
              this.role.setRole(data.role);

              // should come from backend.
              switch (data.role) {
                case 'college':
                  this.router.navigate(['/home/college']);
                  break;
                case 'company':
                  this.router.navigate(['/home/company']);
                  break;
                case 'student':
                  this.router.navigate(['/home/student']);
                  break;
              }

            }, error => {
              this.error = true;
            })
          }
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('RAW API call completed');
          this.router.navigate(['/home/company']);
        }
      });
  }
}
