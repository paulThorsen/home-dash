import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MerossService } from './meross.service';

describe('MerossService', () => {
  let service: MerossService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(MerossService);
  });

  it('creates', () => {
    expect(service).toBeTruthy();
  });
});
