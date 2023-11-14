import { Observable } from 'rxjs';

export interface GarageService {
  open: () => Observable<unknown>;
  close: () => Observable<unknown>;
  state$: Observable<boolean>;
}
