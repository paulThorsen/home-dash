import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../core/services/weather.service';
import { WeatherIconPipe } from '../ui/pipes/weather-icon.pipe';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule, WeatherIconPipe],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  protected readonly weather = inject(WeatherService);
  // protected weather = {
  //   weather: signal({
  //     sunrise: 1704984544,
  //     sunset: 1705018802,
  //     weather: {
  //       temp: 269.75,
  //       feels_like: 263.89,
  //       temp_min: 268.76,
  //       temp_max: 270.95,
  //       pressure: 1011,
  //       humidity: 72,
  //     },
  //     forecast: [
  //       {
  //         dt: 1705017600,
  //         main: {
  //           temp: 269.38,
  //           feels_like: 269.38,
  //           temp_min: 268.64,
  //           temp_max: 269.38,
  //           pressure: 1014,
  //           sea_level: 1014,
  //           grnd_level: 857,
  //           humidity: 78,
  //           temp_kf: 0.74,
  //         },
  //         weather: [
  //           { id: 600, main: 'Snow', description: 'light snow', icon: '13d' },
  //         ],
  //         clouds: { all: 100 },
  //         wind: { speed: 1.21, deg: 235, gust: 1.6 },
  //         visibility: 6581,
  //         pop: 0.77,
  //         snow: { '3h': 0.56 },
  //         sys: { pod: 'd' },
  //         dt_txt: '2024-01-12 00:00:00',
  //       },
  //       {
  //         dt: 1705028400,
  //         main: {
  //           temp: 268.55,
  //           feels_like: 264.63,
  //           temp_min: 267.95,
  //           temp_max: 268.55,
  //           pressure: 1018,
  //           sea_level: 1018,
  //           grnd_level: 859,
  //           humidity: 78,
  //           temp_kf: 0.6,
  //         },
  //         weather: [
  //           { id: 600, main: 'Snow', description: 'light snow', icon: '13n' },
  //         ],
  //         clouds: { all: 100 },
  //         wind: { speed: 2.54, deg: 197, gust: 3.56 },
  //         visibility: 10000,
  //         pop: 0.49,
  //         snow: { '3h': 0.24 },
  //         sys: { pod: 'n' },
  //         dt_txt: '2024-01-12 03:00:00',
  //       },
  //       {
  //         dt: 1705039200,
  //         main: {
  //           temp: 267.14,
  //           feels_like: 267.14,
  //           temp_min: 267.14,
  //           temp_max: 267.14,
  //           pressure: 1022,
  //           sea_level: 1022,
  //           grnd_level: 859,
  //           humidity: 86,
  //           temp_kf: 0,
  //         },
  //         weather: [
  //           { id: 600, main: 'Snow', description: 'light snow', icon: '13n' },
  //         ],
  //         clouds: { all: 100 },
  //         wind: { speed: 1.32, deg: 226, gust: 2.5 },
  //         visibility: 2762,
  //         pop: 0.53,
  //         snow: { '3h': 0.53 },
  //         sys: { pod: 'n' },
  //         dt_txt: '2024-01-12 06:00:00',
  //       },
  //       {
  //         dt: 1705050000,
  //         main: {
  //           temp: 267.31,
  //           feels_like: 262.96,
  //           temp_min: 267.31,
  //           temp_max: 267.31,
  //           pressure: 1021,
  //           sea_level: 1021,
  //           grnd_level: 859,
  //           humidity: 83,
  //           temp_kf: 0,
  //         },
  //         weather: [
  //           { id: 600, main: 'Snow', description: 'light snow', icon: '13n' },
  //         ],
  //         clouds: { all: 100 },
  //         wind: { speed: 2.71, deg: 202, gust: 4.22 },
  //         visibility: 10000,
  //         pop: 0.53,
  //         snow: { '3h': 0.16 },
  //         sys: { pod: 'n' },
  //         dt_txt: '2024-01-12 09:00:00',
  //       },
  //       {
  //         dt: 1705060800,
  //         main: {
  //           temp: 267.54,
  //           feels_like: 262.71,
  //           temp_min: 267.54,
  //           temp_max: 267.54,
  //           pressure: 1021,
  //           sea_level: 1021,
  //           grnd_level: 859,
  //           humidity: 80,
  //           temp_kf: 0,
  //         },
  //         weather: [
  //           { id: 600, main: 'Snow', description: 'light snow', icon: '13n' },
  //         ],
  //         clouds: { all: 100 },
  //         wind: { speed: 3.19, deg: 204, gust: 5.24 },
  //         visibility: 10000,
  //         pop: 0.49,
  //         snow: { '3h': 0.15 },
  //         sys: { pod: 'n' },
  //         dt_txt: '2024-01-12 12:00:00',
  //       },
  //     ],
  //   }),
  // };
}
