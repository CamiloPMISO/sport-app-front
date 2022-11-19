import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { DeleteServiceComponent } from './delete-service.component';

describe('DeleteServiceComponent', () => {
  let component: DeleteServiceComponent;
  let fixture: ComponentFixture<DeleteServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatSnackBarModule,
      ],
      declarations: [ DeleteServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
