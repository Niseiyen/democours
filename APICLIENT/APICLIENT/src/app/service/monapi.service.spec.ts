import { TestBed } from '@angular/core/testing';

import { MonapiService } from './monapi.service';

describe('MonapiService', () => {
  let service: MonapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
