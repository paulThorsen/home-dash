import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { Observable, catchError, map, retry, tap } from 'rxjs';
import { GarageState } from '../models/garage-state';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root',
})
export class GarageService {
  private readonly http = inject(HttpClient);
  private readonly alerts = inject(AlertService);
  private readonly apiBaseURI = 'http://localhost:3000/garage';
  /**
   * Open the garage door.
   */
  open = () => {
    const alert = 'GARAGE_OPEN_FAILED';
    return this.http.post<unknown>(`${this.apiBaseURI}/open`, {}).pipe(
      retry({ delay: 1000, count: 1, resetOnSuccess: true }),
      catchError((e) => {
        this.alerts.addAlert(alert);
        throw e;
      }),
      tap(() => this.alerts.removeAlert(alert))
    );
  };

  /**
   * Close the garage door.
   */
  close = () => {
    const alert = 'GARAGE_CLOSE_FAILED';
    return this.http.post<unknown>(`${this.apiBaseURI}/close`, {}).pipe(
      retry({ delay: 1000, count: 1, resetOnSuccess: true }),
      catchError((e) => {
        this.alerts.addAlert(alert);
        throw e;
      }),
      tap(() => this.alerts.removeAlert(alert))
    );
  };
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
    map((state: GarageState) => !!state.open),
    tap(() => this.alerts.removeAlert('GARAGE_WEBSOCKET_CONNECTION_FAILED'))
  );
}
