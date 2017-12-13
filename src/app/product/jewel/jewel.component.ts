import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { JewelDataService } from "../providers/jewel-data.service";
import { environment } from '../../environments.environment;'

import { Jewel, IJewel } from '../interfaces/jewel';
@Component({
  selector: 'app-jewel',
  templateUrl: './jewel.component.html',
  styleUrls: ['./jewel.component.css']
})
export class JewelComponent implements OnInit {

  @ViewChild('fileImportInput')
  @ViewChild('productForm') productForm: NgForm;

  fileImportInput: any;
  public showLoader: boolean = false;
  public uploader: FileUploader = new FileUploader({ url: this.jewelDataService.imageStorage });
  public jewel: Jewel;
  public editState: Boolean;

  constructor(private router: Router, public jewelDataService: JewelDataService, private activatedRoute: ActivatedRoute) { };

  ngOnInit() {
    this.jewel = new IJewel('', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0);
    //Todo: Need to keep error handeling
    if (this.activatedRoute.snapshot.params.id) {
      this.editState = true;
      this.jewelDataService.getJewelByCodeId(this.activatedRoute.snapshot.params.id).subscribe(res => {
        this.jewel = res;
      });
    } else {
      this.editState = false;
    }

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      var responsePath = JSON.parse(response);
      this.jewel.image = responsePath.path;
      if (this.editState) {
        this.JewelUpdateRequest();
      } else {
        //api to save jewel data and when we fetch from back end remove image and put data in the interface to populate form
        this.jewelDataService.saveJewel(this.jewel).subscribe(res => {
          console.log(res);
          //return to list state
        });
      }
    };
  }

  updateJewel() {
    console.log(this.uploader);
    if (this.uploader.queue.length > 0) {
      console.log('with image change');
      this.uploader.queue[0].upload();
    } else {
      console.log('without image change');
      this.JewelUpdateRequest();
    }
  }

  JewelUpdateRequest() {
    this.jewelDataService.updateJewel(this.jewel).subscribe(res => {
      console.log(res);
      //stay on the same state
    });
  }

}
