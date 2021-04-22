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
  elementType: 'url' | 'canvas' | 'img' = 'url';
  value = 'Techiediaries';
  listCart: BookCart[] = [];
  totalPrice = 0;
  constructor(public cartServiceService: CartServiceService,
              private dataService: DataService,
              private tokenService: TokenService,
              private httpService: HttpService) { }

  ngOnInit(): void {
  }
  processTotalProduct(): any {

  }
  totalSubPrice(): number {
    let sum = 0;
    this.listCart.forEach(x => {
      sum += x.book.price * x.amount;
    });
    return sum;
  }
}
