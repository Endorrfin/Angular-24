import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'kvn-rainbow',
  templateUrl: './rainbow.component.html',
  styleUrls: ['./rainbow.component.scss']
})
export class RainbowComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.email]),
  });

}
