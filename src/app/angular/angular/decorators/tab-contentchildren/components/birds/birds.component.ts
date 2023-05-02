import { Component, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { Bird } from '../bird';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'kvn-birds',
  // templateUrl: './birds.component.html',
  template: `
    <ng-content></ng-content>

    <button mat-button color="primary" (click)="say()">Say!</button>
  `,
  styleUrls: ['./birds.component.scss']
})
export class BirdsComponent {

  // @ContentChildren('sound') birds: QueryList<ElementRef>

  @ContentChildren(Bird) birds: QueryList<Bird>


  say() {
    this.birds.forEach(bird => console.log(bird));
    this.birds.forEach(bird => bird.say());
  }

}
