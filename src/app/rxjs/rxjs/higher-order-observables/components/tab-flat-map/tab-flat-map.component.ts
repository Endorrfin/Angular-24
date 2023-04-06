import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../@shared/shared.module';
import { delay, flatMap, from, of } from 'rxjs';

@Component({
  selector: 'kvn-tab-flat-map',
  templateUrl: './tab-flat-map.component.html',
  styleUrls: ['./tab-flat-map.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class TabFlatMapComponent implements OnInit {

  constructor() {
    const example = (operator: any) => () => {
      from([0, 1, 2, 3, 4, 5, 6, 7])
        .pipe(operator((x: any) => of(x).pipe(delay(1000))))
        .subscribe(
          console.log,
          () => {},
          () => console.log(`${operator.name} completed`)
        );
    };

    example(flatMap)();
  }

  ngOnInit() {}

}
