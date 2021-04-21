import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../../core/services/http.service';

@Component({
  selector: 'app-trending-banner',
  templateUrl: './trending-banner.component.html',
  styleUrls: ['./trending-banner.component.css']
})
export class TrendingBannerComponent implements OnInit {
  hotproducts: any;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getAllProduct().subscribe(res => {
      this.hotproducts = res.data;
      const range = this.hotproducts.length;
      this.hotproducts.splice(4 , range);
    });
  }
}
