import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { LoginRequest, LoginResponse } from '../interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  login(req: LoginRequest) {
    this.authService
      .login(req)
      .pipe(
        // If registration was successfull, then navigate to login route
        tap((res: LoginResponse) => {
          let url = '../../protected/post-register';
          if (res.completed) {
            url = '../../protected/risk';
          }
          this.router.navigate([url]);
        })
      )
      .subscribe();
  }
}
