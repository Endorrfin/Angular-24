import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../@shared/shared.module';

@Component({
  selector: 'kvn-tab-hostlistener',
  templateUrl: './tab-hostlistener.component.html',
  styleUrls: ['./tab-hostlistener.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class TabHostlistenerComponent {

}
