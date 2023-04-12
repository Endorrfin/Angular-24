import { Component } from '@angular/core';

@Component({
  selector: 'kvn-track-by',
  templateUrl: './track-by.component.html',
  styleUrls: ['./track-by.component.scss'],
})
export class TrackByComponent {

  users = [
    { id: 1, name: 'Harry', age: 17 },
    { id: 2, name: 'Ron', age: 19 },
    { id: 3, name: 'Hermit', age: 15 },
    { id: 4, name: 'Roza', age: 54 },
    { id: 5, name: 'Ben', age: 37 },
    { id: 6, name: 'Karl', age: 21 },
    { id: 7, name: 'Nikola', age: 65 },
    { id: 8, name: 'Elon', age: 29 },
    { id: 9, name: 'Jack', age: 31 },
    { id: 10, name: 'Dilan', age: 14 },
  ];

  refresh() {
    this.users = [
      { id: 1, name: 'Harry', age: 17 },
      { id: 2, name: 'Ron', age: 19 },
      { id: 3, name: 'Sirius', age: 25 },
      { id: 4, name: 'Hags', age: 23 },
      { id: 5, name: 'Dumbledore', age: 27 },
      { id: 6, name: 'Karl', age: 21 },
      { id: 7, name: 'Nikola', age: 65 },
      { id: 8, name: 'Elon', age: 29 },
      { id: 9, name: 'Jack', age: 31 },
      { id: 10, name: 'Dilan', age: 14 },
    ];
  };


  trackByUser(index: number, item: any) {
    // return index;
    return item.id;
  }

}
