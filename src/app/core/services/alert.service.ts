import { Injectable, Signal, computed, signal } from '@angular/core';
import { AlertType } from '../models/alert-type';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  readonly alerts = signal<AlertType[]>([]);
  addAlert = (alert: AlertType) => {
    if (!this.alerts().includes(alert)) {
      this.alerts.update((arr) => {
        arr.push(alert);
        return arr;
      });
    }
  };
  removeAlert = (alert: AlertType) => {
    if (this.alerts().includes(alert)) {
      this.alerts.update((arr) => arr.filter((a) => a !== alert));
    }
  };
}
