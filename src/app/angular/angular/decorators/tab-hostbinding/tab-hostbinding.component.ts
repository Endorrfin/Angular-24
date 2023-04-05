import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../@shared/shared.module';
import { AngularModule } from '../../../angular.module';

@Component({
  selector: 'kvn-tab-hostbinding',
  templateUrl: './tab-hostbinding.component.html',
  styleUrls: ['./tab-hostbinding.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule,
    AngularModule
  ]
})
export class TabHostbindingComponent {

}
