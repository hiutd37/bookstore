import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../../core/services/http.service';

@Component({
  selector: 'app-categories-banner',
  templateUrl: './categories-banner.component.html',
  styleUrls: ['./categories-banner.component.css']
})
export class CategoriesBannerComponent implements OnInit {
  categorys: any;
  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.httpService.getAllCategory().subscribe(res => {
      this.categorys = res.data;
      const range = this.categorys.length - 4;
      this.categorys.splice(4, range);
    });
  }

}
