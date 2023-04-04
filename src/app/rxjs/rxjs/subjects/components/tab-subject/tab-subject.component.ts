import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../@shared/shared.module';
import { RxjsModule } from '../../../../rxjs.module';

@Component({
  selector: 'kvn-tab-subject',
  templateUrl: './tab-subject.component.html',
  styleUrls: ['./tab-subject.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule,
    RxjsModule
  ]
})
export class TabSubjectComponent {

}
