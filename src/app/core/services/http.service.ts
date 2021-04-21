import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TokenService} from './token.service';
import {City} from '../../models/city';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient, private matSnackBar: MatSnackBar,
              private tokenService: TokenService) {
  }
  /*
  postHandle(url: string , data: any): Observable<any>{
    return 'aaaa';
  }
   */
  // @ts-ignore
  private env = environment.REST_API_BACKEND;
  public getInforUser(): Observable<any> {
    const url = 'https://localhost:5001/api' + '/UserAuth/profile/' + `${this.tokenService.getIdUserName()}`;
    return this.httpClient.get<any>(url , httpOptions).pipe(catchError(this.handleError));
  }
  // @ts-ignore
  public postInfoLogIn(data: any): Observable<any>{
    const url = 'https://localhost:5001/api' + '/UserAuth/login';
    return this.httpClient.post<any>(url, data, httpOptions).pipe(catchError(this.handleError.bind(this)));
  }
  public postInfoRegister(data: any): any {
    const url = 'https://localhost:5001/api' + '/UserAuth/register';
    return this.httpClient.post(url, data, httpOptions).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.status === 0){
      this.matSnackBar.open('Lỗi Server', 'Close', {
        duration: 2000
      });
    }
  }

  getAllProduct(): Observable<any> {
    const url = 'https://localhost:5001/api' + '/Books';
    return this.httpClient.get(url).pipe(catchError(this.handleError.bind(this)));
  }

  findProduct(id: number): Observable<any> {
    const url = 'https://localhost:5001/api' + '/Books/' + `${id}`;
    return this.httpClient.get(url).pipe(catchError(this.handleError.bind(this)));
  }

  getAllCategory(): Observable<any> {
    const url = 'https://localhost:5001/api' + '/Category/GetAllCategories';
    return this.httpClient.get(url).pipe(catchError(this.handleError.bind(this)));
  }

  getAllCity(): Observable<any> {
    const url = 'https://localhost:5001/api' + '/Address/GetCity';
    console.log(url);
    return this.httpClient.get(url).pipe(catchError(this.handleError.bind(this)));
  }

  getBookCart(id: number): Observable<any>{
    const url = 'https://localhost:5001/api' + '/Cart/' + `${id}`;
    return this.httpClient.get(url).pipe(catchError(this.handleError.bind(this)));
  }

  postProductAPI(data: any): Observable<any> {
    const url = 'https://localhost:5001/api' + '/Cart';
    return this.httpClient.post(url, data, httpOptions).pipe(catchError(this.handleError.bind(this)));
  }
}

