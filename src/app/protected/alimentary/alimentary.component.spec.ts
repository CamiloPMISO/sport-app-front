/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlimentaryComponent } from './alimentary.component';

describe('AlimentaryComponent', () => {
  let component: AlimentaryComponent;
  let fixture: ComponentFixture<AlimentaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlimentaryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
