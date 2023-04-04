import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingService {
  private behaviorSubject = new BehaviorSubject<string>('Hey!');
  private subject = new Subject<string>();
  behaviorSubjectString$ = this.behaviorSubject.asObservable();
  subjectString$ = this.subject.asObservable();

  constructor() {
    // this.behaviorSubject.value;
    // this.subjects.value;
  }

  changeTextBehaviorSubject(newString: string): void {
    this.behaviorSubject.next(newString);
  }


  changeTextSubject(newString: string): void {
    this.subject.next(newString);
  }


}
