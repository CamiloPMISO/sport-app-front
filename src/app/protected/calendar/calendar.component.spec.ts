import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarComponent } from './calendar.component';

import {
  ScheduleModule,
  RecurrenceEditorModule,
} from '@syncfusion/ej2-angular-schedule';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';

export const LOCALSTORAGE_TOKEN_KEY = 'sport_app_token';

export function tokenGetter() {
  return localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
}

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ScheduleModule,
        RecurrenceEditorModule,  
        HttpClientTestingModule,
        BrowserAnimationsModule,
        JwtModule.forRoot({
          config: {
            tokenGetter: tokenGetter,
            allowedDomains: ['localhost:3000', 'localhost:8080'],
          },
        }),
      ],
      declarations: [CalendarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
