import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { TOKEN, URL_BACKEND } from '../../config/config';
import {
  Country,
  PostRegisterRequest,
  Sport,
} from './post-register.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PostRegisterService {
  private urlBack: string = URL_BACKEND;

  constructor(private http: HttpClient) {}

  getCountriesAndCities(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.urlBack}/country`);
  }

  getSports(): Observable<Sport[]> {
    return this.http.get<Sport[]>(`${this.urlBack}/sport`);
  }

  createTrainingPlan(): Observable<any> {
    return this.http
      .post(
        'http://localhost:3002/api/v1/training-plan',
        {},
        { headers: this.getHeaders() }
      )
      .pipe(
        catchError(e => {
          console.error(e);
          return throwError(() => new Error(e));
        })
      );
  }

  addAthletePosRegisterData(data: PostRegisterRequest): Observable<any> {
    return this.http
      .put(`${this.urlBack}/athlete`, data, { headers: this.getHeaders() })
      .pipe(
        catchError(e => {
          console.error(e);
          return throwError(() => new Error(e));
        })
      );
  }

  getHeaders() {
    let token = localStorage.getItem(TOKEN);
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }
}
