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
  constructor(private cartServiceService: CartServiceService,
              private dataService: DataService,
              private tokenService: TokenService,
              private httpService: HttpService) { }

  ngOnInit(): void {
    this.cartServiceService.getBookCart(this.tokenService.getIdUserName());
  }

  getCartSum(): number {
     // return this.cartServiceService.getTotalProduct();
     return this.cartServiceService.totalCart;
    // return 0;
  }
}
