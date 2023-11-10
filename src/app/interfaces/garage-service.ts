import { Observable } from 'rxjs';

export interface GarageService {
  open: () => void;
  close: () => void;
  state$: Observable<boolean>;
}
