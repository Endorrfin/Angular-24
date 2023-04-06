import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../@shared/shared.module';

@Component({
  selector: 'kvn-tab-intro-asynchrony',
  templateUrl: './tab-intro-asynchrony.component.html',
  styleUrls: ['./tab-intro-asynchrony.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class TabIntroAsynchronyComponent {

}
