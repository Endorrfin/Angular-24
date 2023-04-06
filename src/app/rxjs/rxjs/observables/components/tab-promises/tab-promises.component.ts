import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../@shared/shared.module';

@Component({
  selector: 'kvn-tab-promises',
  templateUrl: './tab-promises.component.html',
  styleUrls: ['./tab-promises.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class TabPromisesComponent implements OnInit {
  isOnline: boolean = false;
  status = 'offline';
  myPromise: any;

  constructor() {}

  ngOnInit() {
    this.getStatus();
    this.myPromise.then((res: any) => {
      console.log(res);
      this.checkLogic();
    },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getStatus() {
    console.log('Get status called');
    this.myPromise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        console.log('Received status value');
        this.isOnline = true;
        // resolve(this.isOnline);
        reject('DB connection Error');
      }, 3000);
    })

  }


  checkLogic() {
    console.log('Check logic called');
    if (this.isOnline) {
      this.status = 'online';
    } else {
      this.status = 'offline'
    }
  }

}
