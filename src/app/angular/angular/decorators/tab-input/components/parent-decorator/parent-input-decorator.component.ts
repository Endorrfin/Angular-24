import { Component } from '@angular/core';

@Component({
  selector: 'kvn-parent-input-decorator',
  templateUrl: './parent-input-decorator.component.html',
  styleUrls: ['./parent-input-decorator.component.scss']
})
export class ParentInputDecoratorComponent {
  myFirstInput = 'My first value';

  changeText(newText: string): void {
    this.myFirstInput = newText;
  }

}
