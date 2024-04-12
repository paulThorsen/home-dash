import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from '../../ui/components/tile/tile.component';
import { TVService } from '../../core/services/tv.service';

@Component({
  selector: 'app-tv',
  standalone: true,
  imports: [CommonModule, TileComponent],
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.scss',
})
export class TVComponent {
  protected readonly tv = inject(TVService);
}
