import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GarageService } from './garage.service';

describe('MerossService', () => {
  let service: GarageService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(GarageService);
  });

  it('creates', () => {
    expect(service).toBeTruthy();
  });
});
