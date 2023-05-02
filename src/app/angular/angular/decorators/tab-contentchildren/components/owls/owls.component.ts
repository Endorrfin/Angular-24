import { Component } from '@angular/core';
import { Bird } from '../bird';

@Component({
  selector: 'kvn-owls',
  // templateUrl: './owls.component.html',
  template: `
    <p>
      owls: <strong>{{phrase}}</strong>
    </p>
  `,
  styleUrls: ['./owls.component.scss'],
  providers: [{ provide: Bird, useExisting: OwlsComponent }]
})
export class OwlsComponent {
  phrase: string = '';

  say() {
    this.phrase = 'hoot'
  }

}
