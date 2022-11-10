import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import localeEs from '@angular/common/locales/es-CO';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs, 'es');
import { AppRoutingModule } from './app-routing.module';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

export const LOCALSTORAGE_TOKEN_KEY = 'sport_app_token';

export function tokenGetter() {
  return localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:3000', 'localhost:8080','amazonaws.com'],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
