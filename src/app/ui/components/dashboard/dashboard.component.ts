import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from '../tile/tile.component';
import { GarageComponent } from '../../../gadgets/garage/garage.component';
import { TVComponent } from '../../../gadgets/tv/tv.component';
import { WeatherComponent } from '../../../weather/weather.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    TileComponent,
    GarageComponent,
    TVComponent,
    WeatherComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
