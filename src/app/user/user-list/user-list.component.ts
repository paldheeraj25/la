import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { UserDataService } from '../provider/user-data.service';
import { Observable } from "rxjs";

@Component({
  selector: 'lewiot-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users : Observable<any[]>
  constructor(private http : Http, private router : Router,
    private userDataService : UserDataService) {
    }

  ngOnInit() {
     this.getList();
  }

  getList() {
    this.users = this.userDataService.list();
  }

  editUser(user) {
    this.router.navigate(['user/create', user]);
  }

  deleteUser(user) {
    this.userDataService.delete(user).subscribe(res => this.getList());
  }

}
