import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'kvn-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})

export class ButtonComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('button', { static: false }) public buttonRef: ElementRef;

  @Input() label: string;
  @Input() tooltipText: string;
  @Input() color: string;
  @Input() rounded: boolean;
  @Input() bigHeight: boolean;
  @Input() isHover: boolean;
  @Input() isDisable: boolean;
  @Input() spinner: boolean;
  @Input() throttleTime: number = 500;

  @Output() clickEvent = new EventEmitter();

  private subscription: Subscription = new Subscription();

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.listenClicks();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private listenClicks(): void {
    this.subscription = fromEvent(this.buttonRef.nativeElement, 'click')
      .pipe(throttleTime(this.throttleTime))
      .subscribe(_ => {
        this.clickEvent.emit(true);
      });
  }

  public get currentColor() {
    return `__${this.color}`;
  }


}
