import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../core/data.service';
import {HttpService} from '../../../core/services/http.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  ProdData: any;
  Categories: any;

  constructor(
    private httpService: HttpService , private dataService: DataService ) { }

  ngOnInit(): void {
    this.httpService.getAllProduct().subscribe(res => {
      this.ProdData = res.data;
    });
    this.httpService.getAllCategory().subscribe(res => {
      this.Categories = res.data;
    });
  }

  sort(event: any): any {
    switch (event.target.value) {
      case 'lowtohigh': {
        // @ts-ignore
        this.ProdData = this.ProdData.sort((low, high) => low.price - high.price);
        this.createData(this.ProdData);
        break;
      }

      case 'hightolow': {
        // @ts-ignore
        this.ProdData = this.ProdData.sort((low, high) => high.price - low.price);
        this.createData(this.ProdData);
        break;
      }
    }
  }
  handleSortLowToHigh(event: any): any {
    if (event.target.checked === true){
      this.ProdData = this.ProdData.sort((low: any, high: any) => low.price - high.price);
      this.createData(this.ProdData);
    }
  }
  handleSortHighToLow(event: any): any {
    if (event.target.checked === true){
      this.ProdData = this.ProdData.sort((low: any, high: any) => high.price - low.price);
      this.createData(this.ProdData);
    }
  }
  createData(data: any): any {
    this.dataService.changeData(data);
  }
}
