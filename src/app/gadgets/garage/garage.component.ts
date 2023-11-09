import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerossService } from '../../services/meross.service';
import { GarageService } from '../../interfaces/garage-service';

@Component({
  selector: 'app-garage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './garage.component.html',
  styleUrl: './garage.component.scss',
})
export class GarageComponent {
  protected readonly garageService: GarageService = inject(MerossService);
}
