import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../@shared/shared.module';

@Component({
  selector: 'kvn-filtering-operators',
  templateUrl: './filtering-operators.component.html',
  styleUrls: ['./filtering-operators.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class FilteringOperatorsComponent {

}
