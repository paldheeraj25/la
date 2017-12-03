import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NotificationService } from "../../utils/notification.service";

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

  constructor(private router: Router, private notificationService: NotificationService) { };

  logout() {
    window.localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

  ngOnInit() {

  }



}
