import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../@shared/shared.module';
import { from, map } from 'rxjs';

@Component({
  selector: 'kvn-tab-map',
  templateUrl: './tab-map.component.html',
  styleUrls: ['./tab-map.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class TabMapComponent implements OnInit {
  foo$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).pipe(map((item) => item * 10));


  constructor() {
    this.foo$.subscribe(console.log);
  }

  ngOnInit() {

  }

}
