import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../@shared/shared.module';

@Component({
  selector: 'kvn-tab-async-subject',
  templateUrl: './tab-async-subject.component.html',
  styleUrls: ['./tab-async-subject.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class TabAsyncSubjectComponent {

}
