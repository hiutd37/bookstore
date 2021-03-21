import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ServicesHttpService {
  private REST_API = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }
  public getUser(): Observable<any>{
    const url = `${this.REST_API}/users`;
    return this.httpClient.get<any>(url, httpOptions).pipe(catchError(this.handleError));
  }
  public postInfoRegister(data: any): any{
    const url = `${this.REST_API}/users`;
    return this.httpClient.post(url, data, httpOptions).pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +  `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
