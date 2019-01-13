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
  constructor(private flowerService: FlowerService, private router: Router) { }

  ngOnInit() {
    this.flowers = this.flowerService.getFlowerList();
  }

  goToEdit(flower) {
    this.router.navigate(['flowers/edit/' + flower.id]);
  }

}
