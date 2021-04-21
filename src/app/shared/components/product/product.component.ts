import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from './product.service';
import {Route, Router} from '@angular/router';
import {CartServiceService} from '../../../modules/vlaunch/order/cart-service.service';
import {TokenService} from '../../../core/services/token.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  arrProduct = [];
  infoProduct: any;
  amount = 1;
  idUser: any;
@Input() product: any;
@Input() totalProduct: any;
  constructor(
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
    this.arrProduct.push( id, this.amount, this.idUser );
    console.log(this.arrProduct);
    this.infoProduct = {userId: this.arrProduct[2] , bookId: this.arrProduct[0], amount: this.arrProduct[1]};
    this.cartServiceService.postProduct(this.infoProduct);
    alert('You have added product to cart!');
  }
  infoProductCartItem(): any{
  }
}
