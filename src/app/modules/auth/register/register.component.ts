import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthServiceService} from '../auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: any;
  fullname: any;
  username: any;
  password: any;
  repassword: any;
  constructor(public authServiceService: AuthServiceService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      fullname: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
    this.fullname = this.registerForm.get('fullname');
    this.username = this.registerForm.get('username');
    this.password = this.registerForm.get('password');
  }

  // tslint:disable-next-line:typedef
  doRegister() {
    console.log(this.registerForm.value);
    this.authServiceService.register(this.registerForm.value);
  }
}
