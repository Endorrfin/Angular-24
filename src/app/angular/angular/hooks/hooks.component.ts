import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../@shared/shared.module';

@Component({
  selector: 'kvn-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class HooksComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

}
