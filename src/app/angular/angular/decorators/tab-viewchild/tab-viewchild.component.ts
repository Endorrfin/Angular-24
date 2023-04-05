import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../@shared/shared.module';

@Component({
  selector: 'kvn-tab-viewchild',
  templateUrl: './tab-viewchild.component.html',
  styleUrls: ['./tab-viewchild.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class TabViewchildComponent {

}
