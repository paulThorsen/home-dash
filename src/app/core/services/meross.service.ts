import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import {
  Observable,
  catchError,
  map,
  of,
  retry,
  shareReplay,
  throwError,
} from 'rxjs';
import { GarageState } from '../models/garage-state';
import { GarageService } from '../interfaces/garage-service';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root',
})
export class MerossService implements GarageService {
  private readonly http = inject(HttpClient);
  private readonly alerts = inject(AlertService);
  /**
   * Open the garage door.
   */
  open = () =>
    this.http.post<unknown>('http://localhost:3000/garage/open', {}).pipe(
      retry({ delay: 1000, count: 1, resetOnSuccess: true }),
      catchError((e) => {
        this.alerts.addAlert('GARAGE_OPEN_FAILED');
        throw e;
      })
    );

  /**
   * Close the garage door.
   */
  close = () =>
    this.http.post<unknown>('http://localhost:3000/garage/close', {}).pipe(
      retry({ delay: 1000, count: 1, resetOnSuccess: true }),
      catchError((e) => {
        this.alerts.addAlert('GARAGE_CLOSE_FAILED');
        throw e;
      })
    );
  /**
   * Current state of the garage. Open/closed represented as a boolean.
   */
  state$: Observable<boolean> = webSocket<GarageState>(
    'ws://localhost:3000/garage/state'
  ).pipe(
    catchError(() => {
      this.alerts.addAlert('GARAGE_WEBSOCKET_CONNECTION_FAILED');
      // Throw here, so retry takes effect.
      throw 'GARAGE_WEBSOCKET_CONNECTION_FAILED';
    }),
    retry({ delay: 1000 }),
    map((state: GarageState) => !!state.open)
  );
}
