import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServicesHttpService} from '../../core/services/services-http.service';
import {AuthServiceService} from '../../modules/auth/auth-service.service';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {

  constructor(private servicesHttpService: ServicesHttpService,
              private router: Router,
              public authServiceService: AuthServiceService) { }

  ngOnInit(): void {
  }
}
