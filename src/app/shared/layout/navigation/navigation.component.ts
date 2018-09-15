import { Component, OnInit } from '@angular/core';
import { LoginInfoComponent } from "../../user/login-info/login-info.component";
import { RoleBaseService } from '../../service/role-base.service';

@Component({

  selector: 'sa-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {

  public userRole: string;
  constructor(private role: RoleBaseService) {
  }

  ngOnInit() {
    this.role.role.subscribe(result => {
      this.userRole = result;
    });
  }

}
