import { Component, OnInit } from '@angular/core';
import { FlowerService } from '../providers/flower.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-flowers-list',
  templateUrl: './flowers-list.component.html',
  styleUrls: ['./flowers-list.component.css']
})
export class FlowersListComponent implements OnInit {

  public flowers: Observable<any[]>;
  constructor(private flowerService: FlowerService) { }

  ngOnInit() {
    this.flowers = this.flowerService.getFlowerList();
  }

}
