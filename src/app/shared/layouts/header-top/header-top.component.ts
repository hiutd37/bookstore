import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../../../core/services/http.service';
import {AuthServiceService} from '../../../modules/auth/auth-service.service';
import {TokenService} from '../../../core/services/token.service';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {

  constructor(
              public tokenService: TokenService) { }
  ngOnInit(): void {
  }
}
