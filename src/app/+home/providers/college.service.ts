import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';
import { APIService } from '../../shared/api.service';

Observable
@Injectable()
export class CollegeService {

  private collegeDataUpload = environment.api + "college/upload";

  constructor(private http: Http, private apiService: APIService) { }

  uploadCollegeData(data: any) {
    return this.apiService.createOne(this.collegeDataUpload, data);
  }

}
