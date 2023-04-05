import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../@shared/shared.module';

@Component({
  selector: 'kvn-tab-structural-directives',
  templateUrl: './tab-structural-directives.component.html',
  styleUrls: ['./tab-structural-directives.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class TabStructuralDirectivesComponent {

}
