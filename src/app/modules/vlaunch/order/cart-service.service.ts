import {Injectable, OnInit} from '@angular/core';
import {HttpService} from '../../../core/services/http.service';
import {BehaviorSubject, Subscription} from 'rxjs';
import {BookCart} from '../../../models/bookcart';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService{
  cartSubject = new BehaviorSubject(new Array(new BookCart()));
  $cart = this.cartSubject.asObservable();
  public listCart: BookCart[] = [];
  public totalCart = 0;
  private totalPrice = 0;
  constructor(private httpService: HttpService) { }
  postProduct(data: object): any {
    this.httpService.postProductAPI(data).subscribe(res => {
      if (res.success){
        this.cartSubject.next(res.data);
        this.listCart = res.data;
        this.calcSum();
      }
    });
  }

  getBookCart(idUserName: any): any{
    this.httpService.getBookCart(idUserName).subscribe(res => {
      if (res.success){
        this.cartSubject.next(res.data);
        this.listCart = res.data;
        this.calcSum();
      }
    });
  }

  private calcSum(): number {
    this.totalCart = 0;
    this.listCart.forEach(x => {
      this.totalCart += x.amount;
    });
    return this.totalCart;
  }

  totalSubPrice(): number {
    this.totalPrice = 0;
    this.listCart.forEach(x => {
      this.totalPrice += x.book.price * x.amount;
    });
    return this.totalPrice;
  }
}
