import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {ServicesHttpService} from '../../core/services/services-http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isLogin = false;
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
        }
      }
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
    });
  }
}
