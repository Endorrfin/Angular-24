import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../@shared/shared.module';

@Component({
  selector: 'kvn-tab-viewchildren',
  templateUrl: './tab-viewchildren.component.html',
  styleUrls: ['./tab-viewchildren.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class TabViewchildrenComponent {

}
