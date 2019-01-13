import { Component, OnInit } from '@angular/core';
import { FlowerService } from '../providers/flower.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-flowers-orders',
  templateUrl: './flowers-orders.component.html',
  styleUrls: ['./flowers-orders.component.css']
})
export class FlowersOrdersComponent implements OnInit {

  public orders: Observable<any[]>;
  constructor(private flowerService: FlowerService) { }

  ngOnInit() {
    this.orders = this.flowerService.getFlowerOrders();
  }

}
