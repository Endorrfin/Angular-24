import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../@shared/shared.module';

@Component({
  selector: 'kvn-tab-replay-subject',
  templateUrl: './tab-replay-subject.component.html',
  styleUrls: ['./tab-replay-subject.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class TabReplaySubjectComponent {

}
