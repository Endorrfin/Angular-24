import { Component } from '@angular/core';

@Component({
  selector: 'kvn-buffalo',
  // templateUrl: './buffalo.component.html',
  template: `
    <p>
      buffalo: <strong>{{phrase}}</strong>
    </p>
  `,
  // styleUrls: ['./buffalo.component.scss'],
  styleUrls: ['./buffalo.component.scss']
  // styleUrls: ['./frog.component.scss']
})
export class BuffaloComponent {
  phrase: string = '';


  say() {
    this.phrase = 'drone'
  }

}
