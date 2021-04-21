import { Component, OnInit } from '@angular/core';
import {CartServiceService} from '../cart-service.service';
import {HttpService} from '../../../../core/services/http.service';
import {BookCart} from '../../../../models/BookCart';
import {TokenService} from '../../../../core/services/token.service';
import {DataService} from '../../../../core/data.service';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.css']
})
export class ShoppingCartListComponent implements OnInit {
  listCart: BookCart[] = [];
  totalProduct = 0;
  totalPrice = 0;
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
        }
        this.createData(this.totalProduct);
    });
    }
  createData(data: any): any {
    this.dataService.changeData(data);
  }
}
