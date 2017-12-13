import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { FileUtil } from './file.util';
import { ProductDataService } from "../providers/product-data.service";
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../environments.environment';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})

export class ProductFormComponent implements OnInit {

  @ViewChild('fileImportInput')
  @ViewChild('productForm') productForm: NgForm;

  fileImportInput: any;
  private idList: Array<string>;
  public showLoader: boolean = false;
  files: FileList;
  filestring: string;
  public productImage: string = this.productDataService.productImage;

  public uploader: FileUploader = new FileUploader({ url: this.productImage });

  csvRecords = [];
  constructor(private _fileUtil: FileUtil, private productDataService: ProductDataService, private router: Router) { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      var responsePath = JSON.parse(response);
      this.productForm.value.image = responsePath.path;
      this.showLoader = true;
      let productListDetail: { metadata: any, idList: any, productImage: any };
      productListDetail = { metadata: this.productForm.value, idList: this.idList, productImage: this.filestring };
      this.productDataService.uploadProduct(productListDetail).subscribe(result => {
        this.showLoader = false;
        this.router.navigate(['product/list']);
      }, error => {
        this.showLoader = false;
        return error;
      });

    };
  }

  // METHOD CALLED WHEN CSV FILE IS IMPORTED
  fileChangeListener($event): void {
    var files = $event.srcElement.files;

    if (this._fileUtil.isCSVFile(files[0])) {
      var input = $event.target;
      var reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = (data) => {
        let csvData = reader.result;
        let csvRecordsArray = csvData.split(/\r\n|\n/);
        let headersRow = this._fileUtil.getHeaderArray(csvRecordsArray);
        this.csvRecords = this._fileUtil.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
        this.idList = this.csvRecords;
      }

      reader.onerror = function () {
        alert('Unable to read ' + input.files[0]);
      };

    } else {
      alert("Please import valid .csv file.");
      this.fileReset();
    }
  };

  fileReset() {
    this.fileImportInput.nativeElement.value = "";
    this.csvRecords = [];
  }

  getFiles(event) {
    this.files = event.target.files;
    var reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(this.files[0]);
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    console.log(binaryString);
    this.filestring = btoa(binaryString);  // Converting binary string data. 
  }
}
