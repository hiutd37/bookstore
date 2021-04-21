import {Component, Input, OnInit} from '@angular/core';
import {CartServiceService} from '../cart-service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  totalAmount: any;
@Input() productcart: any ;
  data = [];
  constructor(
    private cartServiceService: CartServiceService
  ) {
  }

  ngOnInit(): void {
  }

  updateQuanTity(inputElement: HTMLInputElement): any {
    console.log(inputElement.value);
  }

  removeProduct(id: number): any {
    alert('Delete product' + `${id}`);
  }
}
