import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../@shared/shared.module';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'kvn-tab-intro-asynchrony',
  templateUrl: './tab-intro-asynchrony.component.html',
  styleUrls: ['./tab-intro-asynchrony.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class TabIntroAsynchronyComponent {

  myObservable: any;
  myPromise: any;
  mySubscription: any;


  observableData = '';
  subjectData: string = '';
  observableData2 = '';
  subjectData2: string = '';
  observableData3 = '';
  subjectData3: string = '';



  // ======= OBSERVABLE VS PROMISE =======

  create() {
    this.myObservable = new Observable<string>(observer => {
      // console.log('Observable has created');
      // observer.next('Observable has emitted 1');
      // observer.next('Observable has emitted 2');
      // observer.next('Observable has emitted 3');

      // Observable emits multiple values
      setInterval(() => {
        observer.next('Observable is emitting data');
      }, 1000);

    });

    this.myPromise = new Promise<string>(resolve => {
      // console.log('Promise has created');
      // resolve('Promise has emitted 1');
      // resolve('Promise has emitted 2');
      // resolve('Promise has emitted 3');

      // Promise emits one values
      setInterval(() => {
        resolve('Promise is emitting data');
      }, 1000);

    });
  };

  execute() {
    this.mySubscription = this.myObservable.subscribe((data: string) => {
      console.log('Observable:', data);
    });

    this.myPromise.then((data: string) => {
      console.log('Promise:', data);
    })
  }

  cancel() {
    // Observable is cancelable, but Promise not
    this.mySubscription.unsubscribe();
  }


  // ======= OBSERVABLE VS SUBJECT =======
  getObservableData() {
    let myObservable = new Observable<any>(observer => {

      // Option I
      observer.next('Observable: please subscribe to WebTechTalk');

      // Option II
      observer.next(Math.floor(Math.random() * 99) + 1);
    });

    myObservable.subscribe(data => {
      this.observableData2 = data;
    });

    myObservable.subscribe(data => {
      this.observableData3 = data;
    });

    console.log(this.observableData);
  }

  getSubjectData() {
    let mySubject = new Subject();
    // mySubject.next('Subject: please subscribe to WebTechTalk');
    // @ts-ignore
    mySubject.subscribe((data: string) => {
      this.subjectData2 = data;
    });

    // @ts-ignore
    mySubject.subscribe((data: string) => {
      this.subjectData3 = data;
    });

    // Option I
    mySubject.next('Subject: please subscribe to WebTechTalk');

    // Option II
    mySubject.next(Math.floor(Math.random() * 99) + 1);

    console.log(this.subjectData);
  }

}
