import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { TOKEN, URL_BACKEND } from '../../config/config';
import { Country, PostRegisterRequest, Sport } from './post-register.interfaces';


@Injectable({
  providedIn: 'root',
})
export class PostRegisterService {
  private urlBack: string = URL_BACKEND ;

  constructor(private http: HttpClient) {}

  getCountriesAndCities() : Observable<Country[]> {
    return this.http.get<Country[]>(`${this.urlBack}/country`);
  }

  getSports() : Observable<Sport[]> {
    return this.http.get<Sport[]>(`${this.urlBack}/sport`);
  }

  addAthletePosRegisterData(data: PostRegisterRequest): Observable<any> {
    let token = localStorage.getItem(TOKEN)
    console.log(token);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`       
    })

    return this.http.put(`${this.urlBack}/athlete`, data, {headers: headers}).pipe(
      catchError(e => {
        console.error(e);
        return throwError(() => new Error(e));
      })
    );
  }

}