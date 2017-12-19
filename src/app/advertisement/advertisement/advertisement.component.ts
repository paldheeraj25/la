import { Component, OnInit } from '@angular/core';
import { AdvertisementDataService } from "../providers/advertisement-data.service";
import { environment } from '../../../environments/environment';
import { FileUploader } from 'ng2-file-upload';
import { Observable } from "rxjs/obeservable"

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {

  //private advertisementDataService: AdvertisementComponent
  public uploader: FileUploader = new FileUploader({ url: environment.api + "uploadImage" });
  public ad: any = { name: '', description: '', image: '' };

  constructor(private advertisementDataService: AdvertisementDataService) { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      //this.showLoader = true;
      var responsePath = JSON.parse(response);
      console.log(responsePath);
      this.ad.image = responsePath.path;
      this.advertisementDataService.saveAd(this.ad).subscribe(res => {
        console.log(res);
      });
    }
  };

  advertisementBroadcast(advertisement: any) {
    this.advertisementDataService.advertisementBroadcast(advertisement);
  }

  fileChangeListener(event) {
    console.log(event)
  }
}
