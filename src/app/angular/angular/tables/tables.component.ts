import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../@shared/shared.module';

@Component({
  selector: 'kvn-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class TablesComponent {

}
