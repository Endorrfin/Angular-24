import { Component } from '@angular/core';
import { AngularModule } from '../../../angular.module';
import { SharedModule } from '../../../../@shared/shared.module';
import { SharedComponentsModule } from '../../../../@shared/components/components.module';

@Component({
  selector: 'tab-introduction',
  templateUrl: './tab-introduction.component.html',
  styleUrls: ['./tab-introduction.component.scss'],
  standalone: true,
  imports: [
    AngularModule,
    SharedModule,
    SharedComponentsModule,
  ]
})
export class TabIntroductionComponent {
  title: string = 'kvn-introduction';
  show: boolean = true;
}
