import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  // API URL
  apiURL = "https://apicv-service-fmclovin.cloud.okteto.net/"
  proxyURL = "proxy-size"
  hoursURL = "dev-size"

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getMedia(): Observable<any> {
    return this.http.get<any>(this.apiURL + this.proxyURL, this.httpOptions)
    .pipe(
      retry(),
      catchError(this.handleError))
  }

  getHours(): Observable<any> {
    return this.http.get<any>(this.apiURL + this.hoursURL, this.httpOptions)
    .pipe(
      retry(),
      catchError(this.handleError))
  }

  // MARK: 

  getMediaProxy(proxy: number[]): number {
    var media = 0;
    var mediaProxy = 0;

    for (let index = 0; index < proxy.length; index++) {
      media += proxy[index];
    }

    mediaProxy = media / proxy.length;

    console.log('media component:', mediaProxy);

    return mediaProxy;
  }

  getMediaHours(devHours: number[]): number {
    var media = 0;
    var mediaHours = 0;

    console.log('media component:', devHours);

    for (let index = 0; index < devHours.length; index++) {
      media += devHours[index];
    }

    mediaHours = media / devHours.length;

    console.log('media component:', mediaHours);

    return mediaHours;
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent){
      // Get client side error
      errorMessage = error.error.errorMessage;
    } else {
      // Get server-side error
      errorMessage = `Error code: ${error.status}\n message: ${error.message}`;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
