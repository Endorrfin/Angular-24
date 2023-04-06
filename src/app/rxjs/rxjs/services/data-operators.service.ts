import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataOperatorsService {

  constructor() {}

  getWidgetOneData() {
    return new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(23);
        observer.complete();
      }, 5000);
    });
  }

  getWidgetTwoData() {
    return new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(15);
        observer.complete();
      }, 1000);
    });
  }

  getWidgetThreeData() {
    return new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(41);
        observer.complete();
      }, 3000);
    });
  }


  getAllData() {
    const observableOne = new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(78);
        observer.complete();
      }, 5000);
    });

    const observableTwo = new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(64);
        observer.complete();
      }, 3000);
    });

    const observableThree = new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(22);
        observer.complete();
      }, 1000);
    });

    return forkJoin([observableOne, observableTwo, observableThree]);

  }


}



