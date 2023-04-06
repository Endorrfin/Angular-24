import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../@shared/shared.module';

@Component({
  selector: 'kvn-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class OperatorsComponent {

}
