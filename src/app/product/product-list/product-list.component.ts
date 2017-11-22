import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { ProductDataService } from '../providers/product-data.service';
import { Product } from "../interfaces/product";
import { ShowSelectedPipe } from '../../../pipes/show-selected.pipe';
import { Observable } from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public data;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "email";
  public sortOrder = "asc";
  public products: Observable<Product[]>;


  constructor(private http: Http, private productDataService: ProductDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.products = this.productDataService.listProducts();
  };

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.city.length;
  }

  goToDesign(item: any) {
    this.productDataService.selectedProduct = item;
    this.router.navigate(['design/' + item.batchId]);
  };

  goToView(item: any) {
    console.log(item);
  };

  goToEdit(item: any) {
    console.log(item);
  };

}
