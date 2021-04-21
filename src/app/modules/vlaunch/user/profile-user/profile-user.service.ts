import { Injectable } from '@angular/core';
import {HttpService} from '../../../../core/services/http.service';
import {BehaviorSubject} from 'rxjs';
import {City} from '../../../../models/city';

@Injectable({
  providedIn: 'root'
})
export class ProfileUserService {
  $city = new BehaviorSubject(new Array(new City()));
  constructor(private httpService: HttpService) { }

  initCityList(): any{
    this.httpService.getAllCity().subscribe(res => {
      this.$city.next(res.data);
    });
  }
}
