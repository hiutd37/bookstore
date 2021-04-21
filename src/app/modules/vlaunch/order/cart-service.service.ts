import { Injectable } from '@angular/core';
import {HttpService} from '../../../core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  constructor(
   private httpService: HttpService
  ) { }
  postProduct(data: object): any {
    this.httpService.postProductAPI(data).subscribe(res => {
      console.log(res);
    });
  }
}
