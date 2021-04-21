import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../core/data.service';
import {CartServiceService} from '../../../modules/vlaunch/order/cart-service.service';
import {BookCart} from '../../../models/bookcart';
import {TokenService} from '../../../core/services/token.service';
import {HttpService} from '../../../core/services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
