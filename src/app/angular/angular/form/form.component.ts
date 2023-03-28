import { Component } from '@angular/core';
import { SharedModule } from '../../../@shared/shared.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'kvn-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: true,
  imports: [
    SharedModule,
    RouterOutlet,
  ]
})
export class FormComponent {

}
