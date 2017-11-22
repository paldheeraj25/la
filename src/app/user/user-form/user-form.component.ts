import { Component, OnInit } from '@angular/core';
import {UserDataService} from './../provider/user-data.service';
import {Router } from '@angular/router';

@Component({
  selector: 'lewiot-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(private userDataService : UserDataService, private router : Router) { }

  showLoader = false;

  ngOnInit() {
  }

  userCreation (payload){
    this.showLoader = true;
    this.userDataService.create(payload).subscribe(res=>{
      this.showLoader = false;
      this.router.navigate(['user/list']);
    })
  }

  cancelCreation (payload) {
    payload = undefined;
  }

}
