import { TestBed } from '@angular/core/testing';

import { TVService } from './tv.service';

describe('RokuService', () => {
  let service: TVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
