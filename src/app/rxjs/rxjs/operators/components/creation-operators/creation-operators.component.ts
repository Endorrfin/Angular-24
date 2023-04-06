import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../@shared/shared.module';

@Component({
  selector: 'kvn-creation-operators',
  templateUrl: './creation-operators.component.html',
  styleUrls: ['./creation-operators.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class CreationOperatorsComponent {

}
