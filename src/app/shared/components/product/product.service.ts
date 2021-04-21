import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../../../core/services/http.service';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient,
              private servicesHttpService: HttpService,
              ) { }
  findProduct(id: number): Observable<any>{
    return this.servicesHttpService.findProduct(id);
  }
}
