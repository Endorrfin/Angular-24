import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../@shared/shared.module';

@Component({
  selector: 'kvn-tab-intro-custom-directives',
  templateUrl: './tab-intro-custom-directives.component.html',
  styleUrls: ['./tab-intro-custom-directives.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class TabIntroCustomDirectivesComponent {

}
