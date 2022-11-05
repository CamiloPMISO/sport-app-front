import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { TOKEN, URL_BACKEND_ATHLETE, URL_BACKEND_TRAINING } from '../../config/config';
import {
  Country,
  PostRegisterRequest,
  Sport,
} from './post-register.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PostRegisterService {

  constructor(private http: HttpClient) {}

  getCountriesAndCities(): Observable<Country[]> {
    return this.http.get<Country[]>(`${URL_BACKEND_ATHLETE}/country`);
  }

  getSports(): Observable<Sport[]> {
    return this.http.get<Sport[]>(`${URL_BACKEND_ATHLETE}/sport`);
  }

  createTrainingPlan(): Observable<any> {
    return this.http
      .post(
        `${URL_BACKEND_TRAINING}/training-plan`,
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
      .put(`${URL_BACKEND_ATHLETE}/athlete`, data, { headers: this.getHeaders() })
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
