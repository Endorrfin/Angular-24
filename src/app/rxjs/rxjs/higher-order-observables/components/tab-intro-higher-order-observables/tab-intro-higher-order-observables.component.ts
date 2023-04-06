import { Component, OnInit, VERSION } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../@shared/shared.module';
import { concatMap, exhaustMap, mergeMap, Subject, Subscription, switchMap, tap } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DelayService } from '../../../services/delay.service';

@Component({
  selector: 'kvn-tab-intro-higher-order-observables',
  templateUrl: './tab-intro-higher-order-observables.component.html',
  styleUrls: ['./tab-intro-higher-order-observables.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class TabIntroHigherOrderObservablesComponent implements OnInit {
  title = "Angular " + VERSION.major;

  sub = new Subject<string>();
  private subscription: Subscription;
  form: FormGroup;

  constructor(
    private delayService: DelayService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      operator: ["", Validators.required]
    });

    this.form.valueChanges.subscribe(({ operator }) => {
      this.deregister();

      switch (operator) {
        case "switchMap": {
          console.log("using switchMap:");
          this.registerWithSwitchMap();
          break;
        }
        case "concatMap": {
          console.log("using concatMap:");
          this.registerWithConcatMap();
          break;
        }
        case "mergeMap": {
          console.log("using mergeMap:");
          this.registerWithMergeMap();
          break;
        }
        case "exhaustMap": {
          console.log("using exhaustMap:");
          this.registerWithExhaustMap();
          break;
        }
        default:
        // code block
      }
    });
  }


  fireEvent() {
    this.sub.next("first");
    this.sub.next("second");

    console.log("< - - - - - - - >");
  }

  private registerWithSwitchMap() {
    this.subscription = this.sub
      .asObservable()
      .pipe(
        tap(value => console.log("--> sent out", value)),
        switchMap(value => this.delayService.anyLongRunningOp(value))
      )
      .subscribe(value => console.log("<-- received", value));
  }

  private registerWithConcatMap() {
    this.subscription = this.sub
      .asObservable()
      .pipe(
        tap(value => console.log("--> sent out", value)),
        concatMap(value => this.delayService.anyLongRunningOp(value))
      )
      .subscribe(value => console.log("<-- received", value));
  }

  private registerWithMergeMap() {
    this.subscription = this.sub
      .asObservable()
      .pipe(
        tap(value => console.log("--> sent out", value)),
        mergeMap(value => this.delayService.anyLongRunningOp(value))
      )
      .subscribe(value => console.log("<-- received", value));
  }

  private registerWithExhaustMap() {
    this.subscription = this.sub
      .asObservable()
      .pipe(
        tap(value => console.log("--> sent out", value)),
        exhaustMap(value => this.delayService.anyLongRunningOp(value))
      )
      .subscribe(value => console.log("<-- received", value));
  }

  private deregister() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      // this.subscription = null;
    }
  }


}
