import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../@shared/shared.module';

@Component({
  selector: 'app-tab-output',
  templateUrl: './tab-output.component.html',
  styleUrls: ['./tab-output.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class TabOutputComponent {

}
