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
  SimpleChange,
  Input
} from '@angular/core';

@Component({
  selector: 'kvn-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements
  // OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  // @Input() title: 'before init parent';
  @Input() title: string = 'before init parent';

  constructor() {
    console.log('-- 1.0 -- Parent.constructor', this.title);
  }

  ngOnChanges(changes: SimpleChange): void {
    console.log('-- 1.1 -- Parent.ngOnChanges', changes, this.title);
  }


  ngOnInit(): void {
    console.log('-- 1.2 -- Parent.ngOnInit', this.title);
  }


  ngDoCheck(): void {
    console.log('-- 1.3 -- Parent.ngDoCheck', this.title);
  }


  ngAfterContentInit(): void {
    console.log('-- 1.4 -- Parent.ngAfterContentInit', this.title);
  }


  ngAfterContentChecked(): void {
    console.log('-- 1.5 -- Parent.ngAfterContentChecked', this.title);
  }


  ngAfterViewInit(): void {
    console.log('-- 1.6 -- Parent.ngAfterViewInit', this.title);
  }


  ngAfterViewChecked(): void {
    console.log('-- 1.7 -- Parent.ngAfterViewChecked', this.title);
  }


  ngOnDestroy(): void {
    console.log('-- 1.8 -- Parent.ngOnDestroy', this.title);
  }

}
