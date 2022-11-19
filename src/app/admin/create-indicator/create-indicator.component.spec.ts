import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { CreateIndicatorComponent } from './create-indicator.component';

describe('CreateIndicatorComponent', () => {
  let component: CreateIndicatorComponent;
  let fixture: ComponentFixture<CreateIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatSnackBarModule,
      ],
      declarations: [ CreateIndicatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
