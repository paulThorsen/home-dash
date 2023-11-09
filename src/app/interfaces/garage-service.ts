import { Observable } from 'rxjs';

export interface GarageService {
  open: () => void;
  close: () => void;
  status$: Observable<any>;
}
