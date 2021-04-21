import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from './product.service';
import {Route, Router} from '@angular/router';
import {CartServiceService} from '../../../modules/vlaunch/order/cart-service.service';
import {TokenService} from '../../../core/services/token.service';
import {DataService} from '../../../core/data.service';
import {HttpService} from '../../../core/services/http.service';
import {BookCart} from '../../../models/bookcart';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  listCart: BookCart[] = [];
  totalProduct = 0;
  totalPrice = 0;
  tmpdataTotal = [];
  dataTotal: any;
  arrProduct = [];
  infoProduct: any;
  amount = 1;
  idUser: any;
@Input() product: any;
  constructor(
  private dataService: DataService,
  private httpService: HttpService,
  private tokenService: TokenService,
  private productService: ProductService,
  private router: Router,
  private cartServiceService: CartServiceService
  ) { }

  ngOnInit(): void {
  }

  addToCart(id: number): void {
    this.idUser = this.tokenService.getIdUserName();
    this.amount = this.amount;
    // @ts-ignore
    this.arrProduct.push(id, this.amount, this.idUser);
    console.log(this.arrProduct);
    this.infoProduct = {userId: this.arrProduct[2], bookId: this.arrProduct[0], amount: this.arrProduct[1]};
    this.cartServiceService.postProduct(this.infoProduct);
    this.httpService.getBookCart(this.tokenService.getIdUserName()).subscribe(res => {
      this.listCart = res.data;
      for (const item of this.listCart) {
        this.totalProduct += item.amount;
        this.totalPrice += item.book.price;
      }
      // @ts-ignore
      this.tmpdataTotal.push(this.totalProduct, this.totalPrice);
      this.dataTotal = {totalProduct: this.tmpdataTotal[0], totalPrice: this.tmpdataTotal[1]};
      alert('You have added product to cart!');
    });
  }
}
