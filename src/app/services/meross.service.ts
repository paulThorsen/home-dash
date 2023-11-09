import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { GarageService } from '../interfaces/garage-service';
import { webSocket } from 'rxjs/webSocket';

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

  status$ = webSocket('ws://localhost:3000/web');
}
