import { LOCALSTORAGE_TOKEN_KEY } from '../../app.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private backUrl: string = 'http://localhost:3000/api/v1';

  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar,
    private jwtService: JwtHelperService
  ) {}

  register(registerRequest: RegisterRequest): Observable<RegisterResponse> {
    return this.http
      .post<RegisterResponse>(`${this.backUrl}/athlete`, registerRequest)
      .pipe(
        tap((res: RegisterResponse) =>
          this.snackbar.open(`Usuario registrado exitosamente`, 'Close', {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          })
        )
      );
  }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${this.backUrl}/athlete/login`, loginRequest)
      .pipe(
        tap((res: LoginResponse) =>
          localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, res.token)
        )
      );
  }
  /*
   Get the user fromt the token payload
   */
  getLoggedInUser() {
    const decodedToken = this.jwtService.decodeToken();
    return decodedToken.user;
  }
}
