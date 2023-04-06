import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../@shared/shared.module';
import { concatMap, delay, from, Observable, of } from 'rxjs';

export interface UserInterface {
  id: number,
  role: string,
}

export interface UserDetailsInterface {
  id: number,
  age: number,
}

@Component({
  selector: 'kvn-tab-concat-map',
  templateUrl: './tab-concat-map.component.html',
  styleUrls: ['./tab-concat-map.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class TabConcatMapComponent implements OnInit {
  users: UserInterface[] = [
    {id: 1, role: 'user'},
    {id: 2, role: 'accountant'},
    {id: 3, role: 'financier'},
    {id: 4, role: 'technical admin'},
    {id: 4, role: 'admin'},
  ]

  constructor() {
    const example = (operator: any) => () => {
      from([0, 1, 2, 3, 4])
        .pipe(operator((x: any) => of(x).pipe(delay(300))))
        .subscribe(
          console.log,
          () => {},
          () => console.log(`${operator.name} completed`)
        );
    };

    example(concatMap)();


    // ===============================
    const user$ = this.getUser(1).pipe(
      concatMap((user) => this.getUserDetails(user))
    );

    user$.subscribe((user) => console.log('user', user));

  }

  ngOnInit() {}


  getUser(id: number): Observable<UserInterface> {
    const user = this.users.find((user) => user.id === id)!;
    return of(user);
  }

  getUserDetails(user: UserInterface): Observable<UserDetailsInterface> {
    return of({ id: user.id, age: 30 });
  }

}
