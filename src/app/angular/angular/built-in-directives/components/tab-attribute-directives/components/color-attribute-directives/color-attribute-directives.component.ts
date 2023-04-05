import { Component } from '@angular/core';

@Component({
  selector: 'kvn-color-attribute-directives',
  templateUrl: './color-attribute-directives.component.html',
  styleUrls: ['./color-attribute-directives.component.scss']
})
export class ColorAttributeDirectivesComponent {
  firstNumber: number = 23;
  secondNumber: number = 75;
  thirdNumber: number = 40;
  isClicked: boolean = false;

  onClick() {
    this.isClicked = true;
  }

}
