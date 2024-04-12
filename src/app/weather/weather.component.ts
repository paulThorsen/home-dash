import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../core/services/weather.service';
import { WeatherIconPipe } from '../ui/pipes/weather-icon.pipe';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule, WeatherIconPipe],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  protected readonly weather = inject(WeatherService);
  protected time$ = interval(1000).pipe(map(() => new Date()));
}
