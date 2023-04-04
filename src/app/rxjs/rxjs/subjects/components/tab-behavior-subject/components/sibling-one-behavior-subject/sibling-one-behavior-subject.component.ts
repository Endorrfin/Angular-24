import { Component, OnInit } from '@angular/core';
import { SiblingService } from '../../../../../services/sibling.service';

@Component({
  selector: 'kvn-sibling-one-behavior-subject',
  templateUrl: './sibling-one-behavior-subject.component.html',
  styleUrls: ['./sibling-one-behavior-subject.component.scss']
})
export class SiblingOneBehaviorSubjectComponent implements OnInit {
  siblingOneServiceValue: string = 'Two';

  constructor(
    private siblingServices: SiblingService) {
  }

  ngOnInit() {
    // this.siblingServices.behaviorSubject.asObservable().subscribe((value) => {
    //   console.log('VALUE ONE', value);
    //   this.siblingOneServiceValue = value;

      this.siblingServices.behaviorSubjectString$.subscribe((value) => {
        console.log('[ 1 ] VALUE ONE', value);
        this.siblingOneServiceValue = value;
      })
  }

  changeText(): void {
    this.siblingServices.changeTextBehaviorSubject('NEW VALUE [ONE]');
  };

}
