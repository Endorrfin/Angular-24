import { Component } from '@angular/core';
import { Bird } from '../bird';

@Component({
  selector: 'kvn-parrots',
  // templateUrl: './parrots.component.html',
  template: `
    <p>
      parrots: <strong>{{phrase}}</strong>
    </p>
  `,
  styleUrls: ['./parrots.component.scss'],
  providers: [{ provide: Bird, useExisting: ParrotsComponent }]
})
export class ParrotsComponent {
  phrase: string = '';

  say() {
    this.phrase = 'talk'
  }

}
