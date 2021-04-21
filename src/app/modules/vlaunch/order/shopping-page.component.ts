import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../../core/data.service';
import {CartServiceService} from './cart-service.service';
import {TokenService} from '../../../core/services/token.service';
import {HttpService} from '../../../core/services/http.service';
import {BookCart} from '../../../models/bookcart';

@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css']
})
export class ShoppingPageComponent implements OnInit {
  listCart: BookCart[] = [];
  totalProduct = 0;
  totalPrice = 0;
  tmpdataTotal = [];
  dataTotal: any;
  constructor(private cartServiceService: CartServiceService,
              private dataService: DataService,
              private tokenService: TokenService,
              private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getBookCart(this.tokenService.getIdUserName()).subscribe(res => {
      this.listCart = res.data;
      for (const item of this.listCart) {
        this.totalProduct += item.amount;
        this.totalPrice += item.book.price;
      }
      // @ts-ignore
      this.tmpdataTotal.push(this.totalProduct, this.totalPrice);
      this.dataTotal = {totalProduct: this.tmpdataTotal[0], totalPrice: this.tmpdataTotal[1]};
    });
  }
}
