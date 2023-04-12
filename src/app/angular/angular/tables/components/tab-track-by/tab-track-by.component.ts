import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../@shared/shared.module';
import { AngularModule } from '../../../../angular.module';

@Component({
  selector: 'kvn-tab-track-by',
  templateUrl: './tab-track-by.component.html',
  styleUrls: ['./tab-track-by.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule,
    AngularModule
  ]
})
export class TabTrackByComponent {

}
