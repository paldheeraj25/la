import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JewelDataService } from '../providers/jewel-data.service';
import { ShowSelectedPipe } from '../../../pipes/show-selected.pipe';
import { Jewel, IJewel } from '../interfaces/jewel';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-jewel-list',
  templateUrl: './jewel-list.component.html',
  styleUrls: ['./jewel-list.component.css']
})
export class JewelListComponent implements OnInit {

  public jewelList: Observable<Array<Jewel>>;
  totalItems = 0;
  currentPage = 0;
  summary: any = {};
  constructor(private router: Router, public jewelDataService: JewelDataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.jewelDataService.getSummary().subscribe(resp => {
      this.summary = resp;
      this.totalItems = this.summary.count;
    })
    this.jewelList = this.jewelDataService.getJewels(0, 20);
  }

  goToView(jewel: Jewel) {
    this.router.navigate(['product/jewel/' + jewel.code]);
  }

  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  pageChanged(event: any): void {
    const currentPage = event.page;
    const limit = currentPage * 20;
    const offset = (limit - 20) === 0 ? (limit - 20) : (limit - 20) + 1;
    this.jewelList = this.jewelDataService.getJewels(offset, limit);
  }

}
