import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any;
  // @ts-ignore
  dataSource = new BehaviorSubject<any>(this.data);
  currentData = this.dataSource.asObservable();
  constructor() {
  }
  changeData(data: any): any {
    this.dataSource.next(data);
  }
}
