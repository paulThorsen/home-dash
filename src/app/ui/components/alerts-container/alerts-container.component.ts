import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../../core/services/alert.service';
import { AlertComponent } from '../alert/alert.component';
import { AlertType } from '../../../core/models/alert-type';

@Component({
  selector: 'app-alerts-container',
  standalone: true,
  imports: [CommonModule, AlertComponent],
  templateUrl: './alerts-container.component.html',
  styleUrl: './alerts-container.component.scss',
})
export class AlertsContainerComponent {
  protected readonly alertService = inject(AlertService);
}
