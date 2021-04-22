import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../../../core/services/token.service';
import {CartServiceService} from '../cart-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  createQR: any;
  nameUser = 'Trinh Duc Hieu';
  idBill = 1;
  address = 'Thanh Pho Ho Chi Minh';
  totalPrice = 0;
  constructor(private cartServiceService: CartServiceService) { }

  ngOnInit(): void {
    this.totalPrice = this.cartServiceService.totalSubPrice();
    this.createQR = '000201'
      + '010212'
      + '0216'
      + '4242424242424242'
      + '2930'
      + '0012'
      + 'D15600000000'
      + '0510'
      + 'A93FO3230Q'
      + '5303'
      + '704'
      + '5407'
      + this.totalPrice
      + '5802'
      + 'VN5916'
      + this.nameUser
      + '6014'
      + this.address
      + '6204'
      + '03'
      + this.idBill
      + '6304'
      + 'A13A';
  }
}
