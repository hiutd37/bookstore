import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, switchMap, timeout } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {TokenService} from './token.service';
// import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient, private  tokenService: TokenService) {}
  private getHttpOptions(): any {
    let headers = new HttpHeaders();
    const token = this.tokenService.getToken();
    if (!(token == null)) {
      headers = headers.append('Authorization', 'Bearer ' + token);
    }
    headers.append('observe', 'response');
    return {
      headers,
    };
  }

  handleError<T>(): any {
    return (error: any): Observable<any> => {
      console.error(error);
      if (error.name === 'TimeoutError') {
        return of({
          error_code: 'time_out',
          error_message:
            'Kết nối mạng không ổn định, vui lòng kiểm tra lại đường truyền.',
          success: false,
        });
      }

      return of(null);
    };
  }
  refreshTokenModify(): any {
    const options = this.getHttpOptions();
    const url = 'UserAuth/refresh';
    return this.http.post( url, {refresh: this.tokenService.getRefreshToken()}, options);

  }

  putHandle(url: string, data: any): Observable<any>{
    return this.requestModify(Method.put, url, data);
  }
  getHandle(url: string, data?: FormData): Observable<any>{
    return this.requestModify(Method.get, url, data);
  }
  postHandle(url: string, data: any): Observable<any>{
    return this.requestModify(Method.post, url, data);
  }
  deleteHandle(url: string, data: FormData): Observable<any>{
    return this.requestModify(Method.delete, url, data);
  }

  requestModify(method: Method, url: string, data?: any): Observable<any> {
    const options = this.getHttpOptions();
    let response: Observable<any>;

    switch (method) {
      case Method.get:
        response = this.http
          .get( url, options)
          .pipe(timeout(60000), catchError(this.processError(() => this.getHandle(url, data))));
        break;
      case Method.post:
        response = this.http
          .post( url, data, options)
          .pipe(timeout(60000), catchError(this.processError(() => this.postHandle(url, data))));
        break;
      case Method.put:
        response = this.http
          .put( url, data, options)
          .pipe(timeout(60000), catchError(this.processError(() => this.putHandle(url, data))));
        break;
      case Method.delete:
        response = this.http
          .delete( url, options)
          .pipe(timeout(60000), catchError(this.processError(() => this.deleteHandle(url, data))));
        break;
    }
    return response;
  }
  private processError(callback?: any): any {
    return async (error: any): Promise<any> => {
      if (error.status === 0){
        return {
          error_message: 'Mạng không ổn định, xin vui lòng kiểm tra lại đường truyền.',
        };
      }
      if (error.status === 401 && (!this.tokenService.getRefreshToken() || this.tokenService.getRefreshToken() === '')) {
        return {
          error_code: 'token_not_valid',
          error_message: 'Phiên đăng nhập đã hết hạn vui lòng đăng nhập lại.',
        };
      }
      const result = await this.refreshTokenModify().toPromise();
      if (result.data.access){
        console.log(result);
        this.tokenService.clear();
        this.tokenService.setToken(result.data.access);
        this.tokenService.setRefreshToken(result.data.refresh);
        return await callback().toPromise();
      }else {
        return {
          error_code: 'token_not_valid',
          error_message: 'Phiên đăng nhập đã hết hạn vui lòng đăng nhập lại.',
        };
      }
      if (error.status === 401 ){
        return {
          error_code: 'token_not_valid',
          error_message: 'Phiên đăng nhập đã hết hạn vui lòng đăng nhập lại.',
        };
      }
    };
  }
}
enum Method{
  get,
  post,
  put,
  delete
}