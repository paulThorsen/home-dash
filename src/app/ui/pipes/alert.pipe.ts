import { Pipe, PipeTransform } from '@angular/core';
import { AlertType } from '../../core/models/alert-type';
import { ERRORS } from '../../core/errors/errors';

@Pipe({
  name: 'alert',
  standalone: true,
})
export class AlertPipe implements PipeTransform {
  transform(alert: AlertType): string {
    return ERRORS[alert];
  }
}
