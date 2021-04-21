import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../../core/services/http.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  constructor(
    private httpClient: HttpClient, private servicesHttpService: HttpService
  ) { }
  checkConnect: any;
  isHidden: any;

  ngOnInit(): void {
  }
}
