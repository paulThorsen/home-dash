import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerossService } from '../../services/meross.service';
import { GarageService } from '../../interfaces/garage-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { TileComponent } from '../../ui/components/tile/tile.component';
import { Subject, merge, tap } from 'rxjs';

@Component({
  selector: 'app-garage',
  standalone: true,
  imports: [CommonModule, TileComponent],
  templateUrl: './garage.component.html',
  styleUrl: './garage.component.scss',
})
export class GarageComponent {
  private readonly garageService: GarageService = inject(MerossService);
  /**
   * Represents the optimistic closing of the garage door.
   */
  private readonly optimisticIsOpenState$ = new Subject<boolean>();

  protected close = () => {
    this.garageService
      .close()
      // We're only optimistic if the response is successful.
      .pipe(tap(() => this.optimisticIsOpenState$.next(false)))
      .subscribe();
  };

  protected open = () => {
    this.garageService
      .open()
      // We're only optimistic if the response is successful.
      .pipe(tap(() => this.optimisticIsOpenState$.next(true)))
      .subscribe();
  };

  /**
   * Signal that merges the current garage state with the optimistic state.
   */
  protected isOpen = toSignal(
    merge(this.garageService.state$, this.optimisticIsOpenState$.asObservable())
  );
}
