import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../@shared/shared.module';
import { RxjsModule } from '../../../../rxjs.module';

@Component({
  selector: 'kvn-tab-behavior-subject',
  templateUrl: './tab-behavior-subject.component.html',
  styleUrls: ['./tab-behavior-subject.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule,
    RxjsModule
  ]
})
export class TabBehaviorSubjectComponent {

}
