import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUtil } from '../../product/product-form/file.util';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @ViewChild('fileImportInput')
  @ViewChild('productForm') productForm: NgForm;

  fileImportInput: any;
  private idList: string;
  public showLoader: boolean = false;
  files: FileList;
  filestring: string;


  csvRecords = [];
  constructor(private _fileUtil: FileUtil, private router: Router) { }

  ngOnInit() {


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
        this.idList = btoa(JSON.stringify(this.csvRecords));
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

  uploadStudent() {

  }
}
