import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUtil } from './file.util';
import { ProductDataService } from "../providers/product-data.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @ViewChild('fileImportInput')

  fileImportInput: any;
  private idList: Array<string>;
  public showLoader: boolean = false;

  csvRecords = [];
  constructor(private _fileUtil: FileUtil, private productDataService: ProductDataService, private router: Router) { }

  ngOnInit() {
  }

  productUpload(product: any) {
    this.showLoader = true;
    let productListDetail: { metadata: any, idList: any };
    productListDetail = { metadata: product, idList: this.idList };
    this.productDataService.uploadProduct(productListDetail).subscribe(result => {
      this.showLoader = false;
      this.router.navigate(['product/list']);
    }, error => {
      this.showLoader = false;
      return error;
    });
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
}
