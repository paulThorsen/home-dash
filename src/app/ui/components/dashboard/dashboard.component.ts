import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from '../tile/tile.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TileComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
