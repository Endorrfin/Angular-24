import { Component } from '@angular/core';

@Component({
  selector: 'kvn-frog',
  // templateUrl: './frog.component.html',
  template: `
    <p>
      frog: <strong>{{phrase}}</strong>
    </p>
  `,
  styleUrls: ['./frog.component.scss']
})
export class FrogComponent {
  phrase: string = '';

  say() {
    this.phrase = 'Croak'
  }

}
