import { Component } from '@angular/core';
import { SharedModule } from '../../../../@shared/shared.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'kvn-tab-introduction',
  templateUrl: './tab-intro-decorators.component.html',
  styleUrls: ['./tab-intro-decorators.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class TabIntroDecoratorsComponent {

}
