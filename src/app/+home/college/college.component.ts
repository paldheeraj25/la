import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FileUtil } from './file.util';
import { ActivatedRoute, Router } from '@angular/router';
import { CollegeService } from '../providers/college.service';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {


  @ViewChild('fileImportInput')
  @ViewChild('productForm') productForm: NgForm;

  fileImportInput: any;
  private idList: string;
  public showLoader: boolean = false;
  files: FileList;
  filestring: string;
  batchName: string;
  batchId: string;

  csvRecords = [];
  constructor(private _fileUtil: FileUtil, private router: Router, private collegeService: CollegeService) { }

  ngOnInit() {
    this.showLoader = true;
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
        console.log(this.csvRecords);
        console.log(this.idList);
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
    this.collegeService.uploadCollegeData(this.idList).subscribe(record => {
      console.log(record);
    });
  }

}
