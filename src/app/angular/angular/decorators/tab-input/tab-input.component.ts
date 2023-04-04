import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../@shared/shared.module';
import { AngularModule } from '../../../angular.module';

@Component({
  selector: 'kvn-tab-input',
  templateUrl: './tab-input.component.html',
  styleUrls: ['./tab-input.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule,
    AngularModule,
  ]
})
export class TabInputComponent {

}
