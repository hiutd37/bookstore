import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  username: any;
  password: any;

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required),
    });
    this.username = this.loginForm.get('username');
    this.password = this.loginForm.get('password');
  }

  doLogin(): void {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value);
  }
}
