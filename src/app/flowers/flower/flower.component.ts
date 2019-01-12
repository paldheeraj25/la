import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlowerService } from '../providers/flower.service';


@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {
  @ViewChild('flowerForm') productForm: NgForm;

  public flower: any = { name: '', price: '', image: '', tag: '', gallery: [] };
  public showLoader: boolean = false;
  public flowerUploadSuccess: boolean = false;
  constructor(private flowerService: FlowerService) { }

  ngOnInit() {

  }

  saveFlower() {
    this.showLoader = true;
    return this.flowerService.uploadProduct(this.flower).subscribe(data => {
      console.log(data);
      if (data) {
        this.flowerUploadSuccess = true;
      }
      this.flower = { name: '', price: '', image: '', tag: '', gallery: [] };
      this.showLoader = false;
    });
  }
}
