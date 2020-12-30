import { TestBed } from '@angular/core/testing';

import { NavigateDataService } from './navigate-data.service';

describe('NavigateDataService', () => {
  let service: NavigateDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigateDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
