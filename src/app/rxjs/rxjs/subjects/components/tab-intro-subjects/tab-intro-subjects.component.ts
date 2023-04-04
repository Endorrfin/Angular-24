import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../@shared/shared.module';

@Component({
  selector: 'kvn-tab-intro-subjects',
  templateUrl: './tab-intro-subjects.component.html',
  styleUrls: ['./tab-intro-subjects.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class TabIntroSubjectsComponent {

}
