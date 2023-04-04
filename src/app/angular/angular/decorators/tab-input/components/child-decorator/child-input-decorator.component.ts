import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'kvn-child-input-decorator',
  templateUrl: './child-input-decorator.component.html',
  styleUrls: ['./child-input-decorator.component.scss']
})
export class ChildInputDecoratorComponent {
  @Input() myFirstInput = '';
  @Output() myFirstOutput = new EventEmitter<string>();


  changeText(): void {
    this.myFirstOutput.emit('MY NEW VALUE!');
  }

}
