import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../@shared/shared.module';
import { Observable } from 'rxjs';

@Component({
  selector: 'kvn-tab-observables',
  templateUrl: './tab-observables.component.html',
  styleUrls: ['./tab-observables.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class TabObservablesComponent implements OnInit {
  data: number[] = [];
  count: number = 0;
  myObservable: any;

  constructor() {}


  ngOnInit(): void {
    this.myObservable = new Observable<number[]>((observer) => {
      setInterval(() => {
        this.count++;
        this.data.push(this.count);
        if (this.count <= 7) {
          observer.next(this.data);
        } else {
          // observer.complete();
          observer.error("DB connection is timed out");
        }
      }, 500);
    });
  }

  getData() {
    this.myObservable.subscribe((res: any) => {
      console.log(res);
    }, (err: any) => {
      console.log(err);
    }, () => {
      console.log('Completed');
    });
    console.log(this.data);
  }

}





