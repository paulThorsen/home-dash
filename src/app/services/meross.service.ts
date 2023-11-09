import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { GarageService } from '../interfaces/garage-service';
import { webSocket } from 'rxjs/webSocket';
import { Observable, map } from 'rxjs';
import { GarageState } from '../models/garage-state';

@Injectable({
  providedIn: 'root',
})
export class MerossService implements GarageService {
  open = () => {
    console.log('open called');
  };
  close = () => {
    console.log('close called');
  };

  state$: Observable<boolean> = webSocket<GarageState>(
    'ws://localhost:3000/garage/state'
  ).pipe(map((state: GarageState) => !!state.open));
}
