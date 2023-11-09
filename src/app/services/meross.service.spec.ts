import { TestBed } from '@angular/core/testing';

import { MerossService } from './meross.service';

describe('MerossService', () => {
  let service: MerossService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerossService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
