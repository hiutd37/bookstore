import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../../core/data.service';

@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css']
})
export class ShoppingPageComponent implements OnInit {
@Input() totalPrice: any;
  constructor() { }

  ngOnInit(): void {
  }

}
