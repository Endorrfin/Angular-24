import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../@shared/shared.module';
import { AngularModule } from '../../../angular.module';

@Component({
  selector: 'kvn-tab-contentchildren',
  templateUrl: './tab-contentchildren.component.html',
  styleUrls: ['./tab-contentchildren.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule,
    AngularModule
  ]
})
export class TabContentchildrenComponent {

}
