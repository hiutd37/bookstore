import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../../shared/components/product/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import { environment } from '../../../../../environments/environment';
import {HttpService} from '../../../../core/services/http.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail: any;
  constructor(
    private httpService: HttpService,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    // @ts-ignore
    const id = this.router.snapshot.params.id ? this.router.snapshot.params.id : 0;
    this.httpService.findProduct(id).subscribe(res => {
      console.log(res);
      this.productDetail = res.data;
    });
  }
}
