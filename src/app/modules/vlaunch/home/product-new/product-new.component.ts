import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../../../shared/components/product/product.service';
import {HttpService} from '../../../../core/services/http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  productnews = [];

  constructor(private httpService: HttpService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.httpService.getAllProduct().subscribe(res => {
      this.productnews = res.data;
      this.sortDate();
      const range = this.productnews.length - 4;
      this.productnews.splice(4, range);
    });
  }
  sortDate(): any {
    return this.productnews.sort((a, b) => {
      // @ts-ignore
      return (new Date(b.publicationDate) as any) - (new Date(a.publicationDate) as any);
    });
  }
}
