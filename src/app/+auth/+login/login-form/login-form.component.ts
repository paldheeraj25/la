import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../providers/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'auth-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public error: Boolean = false;
  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit() {
  }

  submitted = false;

  onSubmit(user) {
    this.submitted = true;
    this.authService.login(user).subscribe(result => {
      this.error = false;
      localStorage.setItem('key', result.token);
      this.router.navigate(['/dashboard']);
    }, error => {
      this.error = true;
    });
  }

}
