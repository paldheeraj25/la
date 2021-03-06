import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlowerService } from '../providers/flower.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {
  @ViewChild('flowerForm') flowerForm: NgForm;

  public flower: any;
  public showLoader: boolean = false;
  public flowerUploadSuccess: boolean = false;
  constructor(private flowerService: FlowerService, private router: Router, private activatedRoute: ActivatedRoute) { }
  private flowerIdFromList: string;
  public editState: Boolean;

  ngOnInit() {
    this.flower = { name: '', price: '', image: '', person: 'null', tag: '', gallery: [] };
    if (this.activatedRoute.snapshot.params.id) {
      console.log(this.flowerService.personType);
      this.flowerIdFromList = this.activatedRoute.snapshot.params.id;
      let flowerId = this.activatedRoute.snapshot.params.id;
      this.editState = true;
      this.flowerService.getFlower('id=' + flowerId + "&person=" + this.flowerService.personType).subscribe(data => {
        this.flower.name = data.name;
        this.flower.price = data.price;
        this.flower.image = data.image;
        this.flower.gallery = data['image-collection'];
        this.flower.person = data['person'] || 'null';
      });
    } else {
      this.editState = false;
      this.flower = { name: '', price: '', image: '', person: 'null', tag: '', gallery: [] }
    }
  }

  saveFlower() {
    this.showLoader = true;
    if (this.editState === true) {
      var data = { flower: this.flower, person: this.flowerService.personType };
      this.flowerService.updateFlower(this.flowerIdFromList, data).subscribe(data => {
        this.flowerUploadSuccess = true;
        this.showLoader = false;
      })
    } else {
      return this.flowerService.uploadProduct(this.flower).subscribe(data => {
        console.log(data);
        if (data) {
          this.flowerUploadSuccess = true;
        }
        this.flower = { name: '', price: '', image: '', person: 'null', tag: '', gallery: [] };
        this.showLoader = false;
      });
    }
  }
}
