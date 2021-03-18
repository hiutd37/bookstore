import { Injectable } from '@angular/core';
import {HttpService} from '../../core/services/http.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = false;
  constructor(private httpService: HttpService, private router: Router
  ) {

  }
  login(data: any): any {
    const url = 'https://localhost:5001/api/UserAuth/login';
    const subscription = this.httpService.postHandle(url, data).subscribe(res => {
      console.log(res);
      if (res && res.success) {
        this.isLogin = true;
        this.router.navigateByUrl('/user');
        }
      this.isLogin === true ? alert('Login Sucesses') : alert('Login fail');
    });
  }
  logout(): void {
    this.isLogin = false;
    window.localStorage.removeItem('refreshToken');
    window.localStorage.removeItem('token');
    this.router.navigateByUrl('/');
  }
}
