import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../../../core/data.service';
import {HttpService} from '../../../../core/services/http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;
  page: any;

  constructor(private httpService: HttpService, private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.httpService.getAllProduct().subscribe(res => {
      console.log(res);
      this.products = res.data;
    });
    this.dataService.currentData.subscribe(data => {
      this.products = data;
    });
    this.initNumPage();
  }

  private initNumPage(): any {
    if (localStorage.getItem('index')){
      this.page = localStorage.getItem('index');
    }else {
      this.page = 1;
    }
  }

  saveIndex($event: number): any {
    localStorage.setItem('index', String($event));
  }
}
