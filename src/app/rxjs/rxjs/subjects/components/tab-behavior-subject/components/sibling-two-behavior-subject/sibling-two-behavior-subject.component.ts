import { Component, OnInit } from '@angular/core';
import { SiblingService } from '../../../../../services/sibling.service';

@Component({
  selector: 'kvn-sibling-two-behavior-subject',
  templateUrl: './sibling-two-behavior-subject.component.html',
  styleUrls: ['./sibling-two-behavior-subject.component.scss']
})
export class SiblingTwoBehaviorSubjectComponent implements OnInit {
  siblingTwoServiceValue: string = 'One';


  constructor (
    private siblingServices: SiblingService)
  {}

  ngOnInit() {
    // this.siblingServices.behaviorSubject.asObservable().subscribe((value) => {
    //   console.log('VALUE TWO', value);
    //   this.siblingOneServiceValue = value;


    this.siblingServices.behaviorSubjectString$.subscribe((value) => {
      console.log('[ 2 ] VALUE TWO', value);
      this.siblingTwoServiceValue = value;
    })
  }

  public changeText(): void {
    this.siblingServices.changeTextBehaviorSubject('NEW VALUE [TWO]');
  };

}
