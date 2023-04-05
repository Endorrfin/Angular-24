import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../@shared/shared.module';
import { AngularModule } from '../../angular.module';

@Component({
  selector: 'kvn-custom-directives',
  templateUrl: './custom-directives.component.html',
  styleUrls: ['./custom-directives.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule,
  ]
})
export class CustomDirectivesComponent {

}
