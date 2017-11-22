import { Component, OnInit } from '@angular/core';
import { AdvertisementDataService } from "../providers/advertisement-data.service";

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {

  //private advertisementDataService: AdvertisementComponent
  constructor(private advertisementDataService: AdvertisementDataService) { }

  ngOnInit() {
  }

  advertisementBroadcast(advertisement: any) {
    this.advertisementDataService.advertisementBroadcast(advertisement);
  }

  fileChangeListener(event) {
    console.log(event)
  }
}
