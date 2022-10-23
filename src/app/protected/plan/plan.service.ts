import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { URL_BACKEND } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  private urlEndPoint: string = URL_BACKEND + "/v1/planes";

  constructor(private http: HttpClient,) { }

  updatePlan(plan: string): Observable<any> {
    return this.http.post(this.urlEndPoint, plan).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        return throwError(() => new Error(e));
      })
    );
  }
}
