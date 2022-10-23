/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { PlanService } from './plan.service';

describe('Service: Plan', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlanService],
    });
  });

  it('should ...', inject([PlanService], (service: PlanService) => {
    expect(service).toBeTruthy();
  }));
});
