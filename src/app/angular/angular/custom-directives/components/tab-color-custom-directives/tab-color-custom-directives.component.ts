import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../@shared/shared.module';
import { AngularModule } from '../../../../angular.module';

@Component({
  selector: 'kvn-tab-color-custom-directives',
  templateUrl: './tab-color-custom-directives.component.html',
  styleUrls: ['./tab-color-custom-directives.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule,
    AngularModule
  ]
})
export class TabColorCustomDirectivesComponent {

}
