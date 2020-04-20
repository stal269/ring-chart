import { TestBed } from '@angular/core/testing';

import { RingChartService } from './ring-chart.service';

describe('RingChartService', () => {
  let service: RingChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RingChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
