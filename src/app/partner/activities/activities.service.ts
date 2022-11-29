import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TOKEN, URL_BACKEND_TRAINING } from '../../config/config';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Activity } from './activity';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private http: HttpClient) { }

  private urlBack: string = URL_BACKEND_TRAINING;

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.urlBack}/partners/activities`, { headers: this.getHeaders() });
  }

  getHeaders() {
    let token = localStorage.getItem(TOKEN);
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

}
