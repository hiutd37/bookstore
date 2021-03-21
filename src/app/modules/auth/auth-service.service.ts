import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {ServicesHttpService} from '../../core/services/services-http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isLogin = false;
  showName = '';
  constructor(private router: Router,
              private servicesHttpService: ServicesHttpService ) { }
  logIn(data: object): any{
    this.servicesHttpService.getUser().subscribe( res => {
      console.log(res);
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0 ; i < res.length ; i++) {
        // @ts-ignore
        if (data.username === res[i].username && data.password === res[i].password) {
          this.isLogin = true;
          this.router.navigateByUrl('/user');
          this.showName = res[i].fullname;
        }
      }
      this.isLogin === true ? alert('Login success') : alert('Login fail');
    });
  }
  logout(): void {
    this.isLogin = false;
    this.router.navigateByUrl('/');
  }
  register(data: object): any {
    // @ts-ignore
    this.servicesHttpService.postInfoRegister(data).subscribe( res => {
      console.log(res);
      alert('Register success, login now');
      this.router.navigateByUrl('/login');
    });
  }
}
