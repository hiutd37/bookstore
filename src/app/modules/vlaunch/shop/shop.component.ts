import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../shared/components/product/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    }
  }
