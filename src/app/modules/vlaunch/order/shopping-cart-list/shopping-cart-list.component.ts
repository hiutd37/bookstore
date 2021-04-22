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
  totalPrice = 0;
  constructor(
    private dataService: DataService,
    private tokenService: TokenService,
    private cartServiceService: CartServiceService,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.cartServiceService.getBookCart(this.tokenService.getIdUserName());
    this.cartServiceService.$cart.subscribe(res => {
      this.listCart = res;
    });
    }

}
