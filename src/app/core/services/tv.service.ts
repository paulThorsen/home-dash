import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, inject } from '@angular/core';
import { AlertService } from './alert.service';
import { Observable, catchError, map, retry, tap } from 'rxjs';
import { AlertType } from '../models/alert-type';
import { webSocket } from 'rxjs/webSocket';
import { TVState } from '../models/tv-state';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class TVService {
  private readonly http = inject(HttpClient);
  private readonly alerts = inject(AlertService);
  private readonly apiBaseURI = 'http://localhost:3000/tv';
  /**
   * Turn on the TV.
   */
  turnOn = () => {
    const alert: AlertType = 'TV_ON_FAILED';
    return this.http.post<unknown>(`${this.apiBaseURI}/on`, {}).pipe(
      retry({ delay: 1000, count: 1, resetOnSuccess: true }),
      catchError((e) => {
        this.alerts.addAlert(alert);
        throw e;
      }),
      tap(() => this.alerts.removeAlert(alert))
    );
  };

  /**
   * Turn off the TV.
   */
  turnOff = () => {
    const alert: AlertType = 'TV_OFF_FAILED';
    return this.http.post<unknown>(`${this.apiBaseURI}/off`, {}).pipe(
      retry({ delay: 1000, count: 1, resetOnSuccess: true }),
      catchError((e) => {
        this.alerts.addAlert(alert);
        throw e;
      }),
      tap(() => this.alerts.removeAlert(alert))
    );
  };
  /**
   * Current state of the TV. On/off represented as a boolean.
   */
  isTvOn: Signal<boolean | undefined> = toSignal(
    webSocket<TVState>('ws://localhost:3000/tv/state').pipe(
      catchError((e) => {
        console.error(e);
        this.alerts.addAlert('TV_WEBSOCKET_CONNECTION_FAILED');
        // Throw here, so retry takes effect.
        throw 'TV_WEBSOCKET_CONNECTION_FAILED';
      }),
      retry({ delay: 1000 }),
      map((state) => state.isTvOn),
      tap(() => this.alerts.removeAlert('TV_WEBSOCKET_CONNECTION_FAILED'))
    )
  );
}
