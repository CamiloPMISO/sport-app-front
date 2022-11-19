import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { TOKEN, URL_BACKEND_ATHLETE, URL_BACKEND_TRAINING } from '../../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Athlete, Sport, TrainingPlan } from './home.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private urlBack: string = URL_BACKEND_ATHLETE;

  constructor(private http: HttpClient) {}

  getAthlete(): Observable<Athlete> {
    return this.http.get<Athlete>(`${this.urlBack}/athlete`, { headers: this.getHeaders() });
  }

  getSports(): Observable<Sport[]> {
    return this.http.get<Sport[]>(`${this.urlBack}/sport`);
  }

  getTrainingPlan(): Observable<TrainingPlan> {
    return this.http
      .get<TrainingPlan>(`${URL_BACKEND_TRAINING}/training-plan`, {
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