import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { GarageService } from '../interfaces/garage-service';
import { webSocket } from 'rxjs/webSocket';
import { Observable, map, retry, shareReplay } from 'rxjs';
import { GarageState } from '../models/garage-state';

@Injectable({
  providedIn: 'root',
})
export class MerossService implements GarageService {
  private readonly http = inject(HttpClient);
  /**
   * Open the garage door.
   */
  open = () => {
    this.http
      .post('http://localhost:3000/garage/open', {})
      .pipe(retry({ delay: 1000, count: 1, resetOnSuccess: true }))
      .subscribe();
  };
  /**
   * Close the garage door.
   */
  close = () => {
    this.http
      .post('http://localhost:3000/garage/close', {})
      .pipe(retry({ delay: 1000, count: 1 }))
      .subscribe();
  };
  /**
   * Current state of the garage. Open/closed represented as a boolean.
   */
  state$: Observable<boolean> = webSocket<GarageState>(
    'ws://localhost:3000/garage/state'
  ).pipe(
    map((state: GarageState) => !!state.open),
    shareReplay()
  );
}
