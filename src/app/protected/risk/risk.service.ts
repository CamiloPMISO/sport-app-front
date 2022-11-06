import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TOKEN, URL_BACKEND } from '../../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Athlete } from './risk.interfaces';

@Injectable({
  providedIn: 'root'
})
export class RiskService {
  private urlBack: string = URL_BACKEND;

  constructor(private http: HttpClient) {}

  getAthlete(): Observable<Athlete> {
    return this.http.get<Athlete>(`${this.urlBack}/athlete`, { headers: this.getHeaders() });
  }

  getHeaders() {
    let token = localStorage.getItem(TOKEN);
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }
}
