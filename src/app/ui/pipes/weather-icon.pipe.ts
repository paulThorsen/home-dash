import { Pipe, PipeTransform } from '@angular/core';
import { weatherCodes } from '../../core/codes/weather-codes';

@Pipe({
  name: 'weatherIcon',
  standalone: true,
})
export class WeatherIconPipe implements PipeTransform {
  transform(code: number): string {
    if (code in weatherCodes) return weatherCodes[code].icon;
    return '01';
  }
}
