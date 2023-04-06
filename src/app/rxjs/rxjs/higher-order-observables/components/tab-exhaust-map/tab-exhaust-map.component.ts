import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../@shared/shared.module';
import { delay, exhaustMap, from, of } from 'rxjs';

@Component({
  selector: 'kvn-tab-exhaust-map',
  templateUrl: './tab-exhaust-map.component.html',
  styleUrls: ['./tab-exhaust-map.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class TabExhaustMapComponent implements OnInit {

  constructor() {
    const example = (operator: any) => () => {
      from([3, 4, 5, 6, 7, 8])
        .pipe(operator((x: any) => of(x).pipe(delay(500))))
        .subscribe(
          console.log,
          () => {},
          () => console.log(`${operator.name} completed`)
        );
    };

    example(exhaustMap)();
  }

  ngOnInit() {}

}
