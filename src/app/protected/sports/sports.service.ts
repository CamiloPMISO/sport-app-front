import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { TOKEN, URL_BACKEND } from '../../config/config';

@Injectable({
  providedIn: 'root',
})
export class SportsService {
  private urlEndPoint: string = URL_BACKEND + '/athlete';

  constructor(private http: HttpClient) {}

  getUserInfo(): Observable<any> {
    let token = localStorage.getItem(TOKEN);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(this.urlEndPoint, { headers: headers }).pipe(
      catchError(e => {
        console.error(e);
        return throwError(() => new Error(e));
      })
    );
  }
}
