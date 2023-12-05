import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVComponent } from './tv.component';

describe('TvComponent', () => {
  let component: TVComponent;
  let fixture: ComponentFixture<TVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TVComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
