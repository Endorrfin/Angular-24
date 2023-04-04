import { Component, OnInit } from '@angular/core';
import { SiblingService } from '../../../../../services/sibling.service';

@Component({
  selector: 'kvn-parent-subject',
  templateUrl: './parent-subject.component.html',
  styleUrls: ['./parent-subject.component.scss']
})
export class ParentSubjectComponent implements OnInit {
  parentValue = '';

  constructor(
    private siblingServices: SiblingService) {
  }

  ngOnInit() {
    this.siblingServices.subjectString$.subscribe((value: string) => {
      console.log('[PARENT] VALUE', value);
      this.parentValue = value;
    })
  }

}
