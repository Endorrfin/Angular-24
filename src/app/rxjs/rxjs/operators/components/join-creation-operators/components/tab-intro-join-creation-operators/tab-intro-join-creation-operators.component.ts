import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../../../@shared/shared.module';

@Component({
  selector: 'kvn-tab-intro-join-creation-operators',
  templateUrl: './tab-intro-join-creation-operators.component.html',
  styleUrls: ['./tab-intro-join-creation-operators.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class TabIntroJoinCreationOperatorsComponent {

}
