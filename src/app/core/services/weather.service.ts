import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, inject } from '@angular/core';
import { catchError, retry, tap } from 'rxjs';
import { AlertService } from './alert.service';
import { Weather } from '../models/weather';
import { toSignal } from '@angular/core/rxjs-interop';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private http = inject(HttpClient);
  private readonly alerts = inject(AlertService);

  weather: Signal<Weather | undefined> = toSignal(
    webSocket<Weather>('ws://localhost:3000/weather').pipe(
      catchError((e) => {
        console.error(e);
        this.alerts.addAlert('GET_WEATHER_FAILED');
        // Throw here, so retry takes effect.
        throw 'GET_WEATHER_FAILED';
      }),
      retry({ delay: 1000 }),
      tap(() => this.alerts.removeAlert('GET_WEATHER_FAILED'))
    )
  );
}
