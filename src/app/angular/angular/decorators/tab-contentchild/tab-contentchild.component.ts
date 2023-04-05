import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../@shared/shared.module';

@Component({
  selector: 'kvn-tab-contentchild',
  templateUrl: './tab-contentchild.component.html',
  styleUrls: ['./tab-contentchild.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class TabContentchildComponent {

}
