import { Component, OnInit, VERSION } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../@shared/shared.module';

@Component({
  selector: 'kvn-higher-order-observables',
  templateUrl: './higher-order-observables.component.html',
  styleUrls: ['./higher-order-observables.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class HigherOrderObservablesComponent implements OnInit {
  title = "Angular " + VERSION.major;

  constructor() {}

  ngOnInit() {}

}
