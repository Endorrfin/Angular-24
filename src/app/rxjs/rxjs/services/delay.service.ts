import { Injectable } from '@angular/core';
import { mapTo, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DelayService {
  anyLongRunningOp(value: string) {
    return timer(2000).pipe(mapTo(value));
  }

  constructor() { }
}
