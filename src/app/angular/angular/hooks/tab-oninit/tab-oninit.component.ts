import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy, SimpleChange
} from '@angular/core';

@Component({
  selector: 'kvn-tab-oninit',
  templateUrl: './tab-oninit.component.html',
  styleUrls: ['./tab-oninit.component.scss'],
  standalone: true,
})
export class TabOninitComponent implements
  // OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  constructor() {
    console.log('-- 1.0 -- Parent.constructor');
  }

  // ngOnChanges(changes: SimpleChange): void {
  //   console.log('-- 1.1 -- Parent.ngOnChanges', changes);
  // }


  ngOnInit(): void {
    console.log('-- 1.2 -- Parent.ngOnInit');
  }


  ngDoCheck(): void {
    console.log('-- 1.3 -- Parent.ngDoCheck');
  }


  ngAfterContentInit(): void {
    console.log('-- 1.4 -- Parent.ngAfterContentInit');
  }


  ngAfterContentChecked(): void {
    console.log('-- 1.5 -- Parent.ngAfterContentChecked');
  }


  ngAfterViewInit(): void {
    console.log('-- 1.6 -- Parent.ngAfterViewInit');
  }


  ngAfterViewChecked(): void {
    console.log('-- 1.7 -- Parent.ngAfterViewChecked');
  }


  ngOnDestroy(): void {
    console.log('-- 1.8 -- Parent.ngOnDestroy');
  }

}
