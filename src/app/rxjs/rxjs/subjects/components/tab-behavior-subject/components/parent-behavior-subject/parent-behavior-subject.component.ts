import { Component, OnInit } from '@angular/core';
import { SiblingService } from '../../../../../services/sibling.service';

@Component({
  selector: 'kvn-parent-behavior-subject',
  templateUrl: './parent-behavior-subject.component.html',
  styleUrls: ['./parent-behavior-subject.component.scss']
})
export class ParentBehaviorSubjectComponent implements OnInit {
  myServiceValue = '';

  constructor(
    private siblingServices: SiblingService
  ) {
  }

  ngOnInit() {
    this.siblingServices.behaviorSubjectString$.subscribe((value: string) => {
      console.log('[PARENT] VALUE', value);
      this.myServiceValue = value;
    })
  }

}
