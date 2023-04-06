import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../@shared/shared.module';
import { TabForkjoinComponent } from './components/tab-forkjoin/tab-forkjoin.component';

@Component({
  selector: 'kvn-join-creation-operators',
  templateUrl: './join-creation-operators.component.html',
  styleUrls: ['./join-creation-operators.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule,
    TabForkjoinComponent
  ]
})
export class JoinCreationOperatorsComponent {

}
