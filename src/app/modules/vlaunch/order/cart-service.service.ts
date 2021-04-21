import { Injectable } from '@angular/core';
import {HttpService} from '../../../core/services/http.service';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  data: any;
  // @ts-ignore
  dataSource = new BehaviorSubject<any>(this.data);
  currentData = this.dataSource.asObservable();
  constructor(
   private httpService: HttpService
  ) { }
  postProduct(data: object): any {
    this.httpService.postProductAPI(data).subscribe(res => {
      console.log(res);
    });
  }
    changeData(data: any): any {
      this.dataSource.next(data);
    }
}
