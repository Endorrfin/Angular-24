import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../@shared/shared.module';

@Component({
  selector: 'kvn-tab-intro-build-in-directives',
  templateUrl: './tab-intro-build-in-directives.component.html',
  styleUrls: ['./tab-intro-build-in-directives.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class TabIntroBuildInDirectivesComponent {

}
