import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../../core/services/http.service';
import {TokenService} from '../../core/services/token.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isLogin = false;
  showName = '';
  constructor(private router: Router,
              private servicesHttpService: HttpService,
              private tokenService: TokenService,
              private matSnackBar: MatSnackBar) { }
  logInToken(data: object): any{
    this.servicesHttpService.postInfoLogIn(data).subscribe(res => {
      console.log(res);
      if (res.success === true){
        this.isLogin = true;
        this.tokenService.setAccessToken(res.data.access);
        this.tokenService.setRefreshToken(res.data.refresh);
        this.router.navigateByUrl('/shop');
      }else {
          this.matSnackBar.open(res.error_message, 'Cancel', {
            duration: 2000
          });
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
      alert('Register success, login now');
      this.router.navigateByUrl('/login');
    });
  }
}
