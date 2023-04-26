import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../@shared/shared.module';
import { AngularModule } from '../../../../angular.module';
import { WidgetWrapperComponent } from './components/widget-wrapper/widget-wrapper.component';

@Component({
  selector: 'kvn-tab-ng-template-outlet',
  templateUrl: './tab-ng-template-outlet.component.html',
  styleUrls: ['./tab-ng-template-outlet.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule,
    AngularModule,
    WidgetWrapperComponent
  ]
})
export class TabNgTemplateOutletComponent {

}
