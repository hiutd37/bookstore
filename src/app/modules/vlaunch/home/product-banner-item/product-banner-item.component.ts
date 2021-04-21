import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-banner-item',
  templateUrl: './product-banner-item.component.html',
  styleUrls: ['./product-banner-item.component.css']
})
export class ProductBannerItemComponent implements OnInit {
  @Input() product: any;
  constructor() { }

  ngOnInit(): void {
  }

}
