/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { SportsService } from './sports.service';

describe('Service: Sports', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SportsService]
    });
  });

  it('should ...', inject([SportsService], (service: SportsService) => {
    expect(service).toBeTruthy();
  }));
});
