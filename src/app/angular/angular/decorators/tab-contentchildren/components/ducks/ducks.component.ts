import { Component } from '@angular/core';
import { Bird } from '../bird';

@Component({
  selector: 'kvn-ducks',
  // templateUrl: './ducks.component.html',
  template: `
    <p>
      ducks: <strong>{{phrase}}</strong>
    </p>
  `,
  styleUrls: ['./ducks.component.scss'],
  providers: [ { provide: Bird, useExisting: DucksComponent }]
})
export class DucksComponent {
  phrase: string = '';

  say() {
    this.phrase = 'quark'
  }

}
