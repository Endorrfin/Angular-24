import { Component } from '@angular/core';
import { Bird } from '../bird';

@Component({
  selector: 'kvn-bats',
  // templateUrl: './bats.component.html',
  template: `
    <p>
      bats: <strong>{{phrase}}</strong>
    </p>
  `,
  styleUrls: ['./bats.component.scss'],
  providers: [{ provide: Bird, useExisting: BatsComponent }]

})
export class BatsComponent {
  phrase: string = '';

  say() {
    this.phrase = 'screech'
  }

}
