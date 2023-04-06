import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../@shared/shared.module';

@Component({
  selector: 'kvn-transformation-operators',
  templateUrl: './transformation-operators.component.html',
  styleUrls: ['./transformation-operators.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class TransformationOperatorsComponent {

}
