import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../../core/services/http.service';
import {Router} from '@angular/router';
import {AuthServiceService} from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  username: any;
  password: any;

  constructor(
    private servicesHttpService: HttpService,
    private authServiceService: AuthServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    this.username = this.loginForm.get('username');
    this.password = this.loginForm.get('password');
  }
  doLogin(): void {
    console.log(this.loginForm.value);
    this.authServiceService.logInToken(this.loginForm.value);
  }
}
