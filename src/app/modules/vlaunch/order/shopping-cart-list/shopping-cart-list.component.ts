import {Component, OnInit} from '@angular/core';
import {CartServiceService} from '../cart-service.service';
import {HttpService} from '../../../../core/services/http.service';
import {TokenService} from '../../../../core/services/token.service';
import {DataService} from '../../../../core/data.service';
import {BookCart} from '../../../../models/bookcart';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.css']
})
export class ShoppingCartListComponent implements OnInit {
  listCart: BookCart[] = [];
  totalProduct = 0;
  totalPrice = 0;
  tmpdataTotal = [];
  dataTotal: any;
  constructor(
    private dataService: DataService,
    private tokenService: TokenService,
    private cartServiceService: CartServiceService,
    private httpService: HttpService
  ) { }

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
        this.createData(this.dataTotal);
    });
    }
  createData(data: any): any {
    this.cartServiceService.changeData(data);
  }
}
