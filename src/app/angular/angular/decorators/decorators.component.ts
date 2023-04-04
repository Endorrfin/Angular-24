import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../@shared/shared.module';

@Component({
  selector: 'kvn-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class DecoratorsComponent {

}
