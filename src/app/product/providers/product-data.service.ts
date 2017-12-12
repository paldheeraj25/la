import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { Product } from "../interfaces/product";


@Injectable()
export class ProductDataService {
  private productUploadUrl = environment.api + "upload";
  private productListUrl = environment.api + "products";
  public productImage = environment.api + "uploadImage";

  public selectedProduct: Product;
  constructor(private http: Http) { }

  uploadProduct(productList: any) {
    console.log(productList);
    return this.http.post(this.productUploadUrl, productList).map(res => res.json()).take(1);
  }

  listProducts() {
    return this.http.get(this.productListUrl).map(res => res.json());
  }

}
