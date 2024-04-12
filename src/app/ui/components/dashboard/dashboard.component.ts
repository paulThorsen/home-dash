import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from '../tile/tile.component';
import { GarageComponent } from '../../../gadgets/garage/garage.component';
import { TVComponent } from '../../../gadgets/tv/tv.component';
import { WeatherComponent } from '../../../weather/weather.component';
import { TVService } from '../../../core/services/tv.service';

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
export class DashboardComponent {
  protected tvService = inject(TVService);
}
