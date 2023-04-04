import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChange, Input
} from '@angular/core';

@Component({
  selector: 'kvn-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent  implements
  // OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input()  title: string = '';

  constructor() {
    console.log('== 2.0 == Child.constructor');
  }

  ngOnChanges(changes: SimpleChange): void {
    console.log('== 2.1 == Child.ngOnChanges', changes);
  }


  ngOnInit(): void {
    console.log('== 2.2 == Child.ngOnInit');
  }


  ngDoCheck(): void {
    console.log('== 2.3 == Child.ngDoCheck');
  }


  ngAfterContentInit(): void {
    console.log('== 2.4 == Child.ngAfterContentInit');
  }


  ngAfterContentChecked(): void {
    console.log('== 2.5 == Child.ngAfterContentChecked');
  }


  ngAfterViewInit(): void {
    console.log('== 2.6 == Child.ngAfterViewInit');
  }


  ngAfterViewChecked(): void {
    console.log('== 2.7 == Child.ngAfterViewChecked');
  }


  ngOnDestroy(): void {
    console.log('== 2.8 == Child.ngOnDestroy');
  }

}
