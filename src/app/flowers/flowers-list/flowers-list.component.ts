import { Component, OnInit } from '@angular/core';
import { FlowerService } from '../providers/flower.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-flowers-list',
  templateUrl: './flowers-list.component.html',
  styleUrls: ['./flowers-list.component.css']
})
export class FlowersListComponent implements OnInit {

  public flowers: Observable<any[]>;
  public person: string = 'null';
  constructor(private flowerService: FlowerService, private router: Router) { }

  ngOnInit() {
    this.flowers = this.flowerService.getFlowerList(this.person);
  }

  goToEdit(flower) {
    this.flowerService.personType = this.person;
    this.router.navigate(['flowers/edit/' + flower.id]);
  }

  onChange(deviceValue) {
    this.flowers = this.flowerService.getFlowerList(deviceValue);
  }
}
