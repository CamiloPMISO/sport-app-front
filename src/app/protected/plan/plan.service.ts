import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { TOKEN, URL_BACKEND } from '../../config/config';
import { PlanRequest } from './plan.interface';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  private urlEndPoint: string = URL_BACKEND + '/athlete/set_plan';

  constructor(private http: HttpClient) {}

  updatePlan(plan: string): Observable<any> {
    let token = localStorage.getItem(TOKEN)
    console.log(token);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`       
    })
    let planRequest: PlanRequest = {plan: plan}
    return this.http.put(this.urlEndPoint, planRequest, {headers: headers}).pipe(
      catchError(e => {
        console.error(e);
        return throwError(() => new Error(e));
      })
    );
  }
}
