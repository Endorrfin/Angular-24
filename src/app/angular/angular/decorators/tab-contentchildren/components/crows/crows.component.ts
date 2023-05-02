import { Component } from '@angular/core';
import { Bird } from '../bird';

@Component({
  selector: 'kvn-crows',
  // templateUrl: './crows.component.html',
  template: `
    <p>
      crows: <strong>{{phrase}}</strong>
    </p>
  `,
  styleUrls: ['./crows.component.scss'],
  providers: [{ provide: Bird, useExisting: CrowsComponent }]
})
export class CrowsComponent {
  phrase: string = '';


  say() {
    this.phrase = 'caw'
  }

}
