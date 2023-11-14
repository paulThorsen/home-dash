import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './ui/components/dashboard/dashboard.component';
import { AlertService } from './core/services/alert.service';
import { AlertsContainerComponent } from './ui/components/alerts-container/alerts-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    DashboardComponent,
    AlertsContainerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected readonly alertService = inject(AlertService);
  title = 'home-dash';
}
