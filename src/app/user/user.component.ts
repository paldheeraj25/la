import { Component, OnInit } from '@angular/core';
import {UserDataService} from './provider/user-data.service';

@Component({
  selector: 'lewiot-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userDataService : UserDataService) { }

  ngOnInit() {
    //this.userDataService.create({test:"test"});
  }

  

}
