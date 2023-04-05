import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../@shared/services/data.service';

@Component({
  selector: 'kvn-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  userRole = 'user';
  // userRole = 'admin';
  private channelName: string;

  subject = new Subject();
  asyncSubject = new AsyncSubject();
  behaviorSubject = new BehaviorSubject('a');
  replaySubject = new ReplaySubject(2);

  subjects = [this.subject, this.asyncSubject, this.behaviorSubject, this.replaySubject];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    // this.log();

    this.dataService.getData().subscribe((res) => {
      this.channelName = res;
    });

    this.route.data.subscribe(res => {
      this.channelName = res['data'];
    })
  }

  // log = (subjectType: any) => (e: any) => console.log(`${subjectType}: ${e}`);

  log(subjectType: string, e: any) {
    console.log(`${subjectType}: ${e}`);

    console.log('SUBSCRIBE 1');
    // this.subject.subscribe('s1', 'subject');
    // this.asyncSubject.subscribe(this.log('s1 asyncSubject'));
    // this.behaviorSubject.subscribe(this.log('s1 behaviorSubject'));
    // this.replaySubject.subscribe(this.log('s1 replaySubject'));

  }




}
