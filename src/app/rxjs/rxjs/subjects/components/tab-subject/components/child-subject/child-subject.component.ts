import { Component, OnInit } from '@angular/core';
import { SiblingService } from '../../../../../services/sibling.service';

@Component({
  selector: 'kvn-child-subject',
  templateUrl: './child-subject.component.html',
  styleUrls: ['./child-subject.component.scss']
})
export class ChildSubjectComponent implements OnInit{
  childValue: string = 'First';

  constructor(
    private siblingServices: SiblingService
  ) {
  }


  ngOnInit() {
    this.siblingServices.subjectString$.subscribe((value) => {
      console.log('[ CHILD ] VALUE NEW', value);
      this.childValue = value;
    })
  }

  public changeText(): void {
    this.siblingServices.changeTextSubject('NEW VALUE { Second }');
  };

}
