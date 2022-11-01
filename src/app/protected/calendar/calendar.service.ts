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
import { Sport, TrainingPlan } from './calendar.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private urlBack: string = URL_BACKEND;

  constructor(private http: HttpClient) {}

  getSports(): Observable<Sport[]> {
    return this.http.get<Sport[]>(`${this.urlBack}/sport`);
  }

  getTrainingPlan(): Observable<TrainingPlan> {
    return this.http
      .get<TrainingPlan>('http://localhost:3002/api/v1/training-plan', {
        headers: this.getHeaders(),
      })
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
