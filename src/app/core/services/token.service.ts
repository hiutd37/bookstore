import {Injectable} from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private payload: any;

  constructor() {
  }

  private static getAccessToken(): any {
    return localStorage.getItem('access');
  }

  getName(): any {
    if (TokenService.getAccessToken() == null) {
      return null;
    } else {
      this.payload = jwt_decode(TokenService.getAccessToken());
      return this.payload.Name;
    }
  }
  getIdUserName(): any{
    if (TokenService.getAccessToken() == null){
      return null;
    }
    else{
      this.payload = jwt_decode(TokenService.getAccessToken());
      return this.payload.id;
    }
  }

  setAccessToken(access: string): any {
    localStorage.setItem('access', access);
  }

  setRefreshToken(refresh: string): any {
    localStorage.setItem('refresh', refresh);
  }

  logout(): any {
    localStorage.clear();
  }

  isLogin(): any {
    return this.getName() != null;
  }
}
