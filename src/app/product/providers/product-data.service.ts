import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';
import { APIService } from './../../shared/api.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { Product } from "../interfaces/product";


@Injectable()
export class ProductDataService {
  private productUploadUrl = environment.api + "upload";
  private productListUrl = environment.api + "products";
  public productImage = environment.api + "uploadImage";

  public selectedProduct: Product;
  constructor(private http: Http, private apiService: APIService) { }

  uploadProduct(productList: any) {
    return this.apiService.createOne(this.productUploadUrl, productList).map(res => {
      res.take(1);
    });
  }

  listProducts(): Observable<any> {
    return this.apiService.getAll(this.productListUrl, {}).map(res => {
      return res;
    });
  }

}
