import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NotificationService } from "../../utils/notification.service";
import { AuthService } from "../../../providers/auth/auth.service";

declare var $: any;

@Component({
  selector: 'sa-logout',
  template: `
<div id="logout" (click)="logout()" class="btn-header transparent pull-right">
        <span> <a  title="Sign Out" data-action="userLogout"><i
          class="fa fa-sign-out"></i></a> </span>
    </div>
  `,
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private notificationService: NotificationService, private authService: AuthService) { };

  logout() {
    // this.authService.logout().subscribe(result => {
      window.localStorage.clear();
      this.router.navigate(['/auth/login']);
    // }, error => {
    //   this.router.navigate(['/auth/login']);
    //   console.log("Error happened");
    // });
  }

  ngOnInit() {

  }



}
