import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'kvn-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent {
  subject = new Subject<number>();

}
