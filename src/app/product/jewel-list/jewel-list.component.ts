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
  constructor(private router: Router, public jewelDataService: JewelDataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.jewelList = this.jewelDataService.getJewels();
  }

  goToView(jewel: Jewel) {
    this.router.navigate(['product/jewel/' + jewel.code]);
  }

}
