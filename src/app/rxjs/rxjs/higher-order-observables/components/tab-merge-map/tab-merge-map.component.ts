import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../@shared/shared.module';
import { delay, from, mergeMap, of } from 'rxjs';

@Component({
  selector: 'kvn-tab-merge-map',
  templateUrl: './tab-merge-map.component.html',
  styleUrls: ['./tab-merge-map.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class TabMergeMapComponent implements OnInit {

  constructor() {
    const example = (operator: any) => () => {
      from([0, 1, 2, 3, 4, 5])
        .pipe(operator((x: any) => of(x).pipe(delay(500))))
        .subscribe(
          console.log,
          () => {},
          () => console.log(`${operator.name} completed`)
        );
    };

    example(mergeMap)();
  }

  ngOnInit() {}

}
