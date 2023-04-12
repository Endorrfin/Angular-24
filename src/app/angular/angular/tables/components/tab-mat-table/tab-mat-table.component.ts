import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../@shared/shared.module';

@Component({
  selector: 'kvn-tab-mat-table',
  templateUrl: './tab-mat-table.component.html',
  styleUrls: ['./tab-mat-table.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class TabMatTableComponent {

}
