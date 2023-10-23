import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/';

@Injectable({
  providedIn: 'root',
})
export class LinearRegressionService {
  mainURL = 'https://apicv-service-fmclovin.cloud.okteto.net/';
  test1 = '3a_test1';
  test2 = '3a_test2';
  test3 = '3a_test3';
  test4 = '3a_test4';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getTest1(): Observable<any> {
    return this.http
      .get<any>(this.mainURL + this.test1, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  getTest2(): Observable<any> {
    return this.http
      .get<any>(this.mainURL + this.test2, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  getTest3(): Observable<any> {
    return this.http
      .get<any>(this.mainURL + this.test3, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  getTest4(): Observable<any> {
    return this.http
      .get<any>(this.mainURL + this.test4, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = 'Error code: ${error.status}\n Message: ${error.message}';
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
