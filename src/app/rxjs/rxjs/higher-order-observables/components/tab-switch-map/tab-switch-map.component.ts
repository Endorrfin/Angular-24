import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../../@shared/shared.module';
import { delay, from, Observable, of, switchMap } from 'rxjs';

export interface UserInterface {
  id: number,
  role: string,
}

export interface UserDetailsInterface {
  id: number,
  age: number,
}

@Component({
  selector: 'kvn-tab-switch-map',
  templateUrl: './tab-switch-map.component.html',
  styleUrls: ['./tab-switch-map.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ]
})
export class TabSwitchMapComponent implements OnInit {
  users: UserInterface[] = [
    {id: 1, role: 'user'},
    {id: 2, role: 'accountant'},
    {id: 3, role: 'financier'},
    {id: 4, role: 'technical admin'},
    {id: 4, role: 'admin'},
  ]

  constructor() {
    const example = (operator: any) => () => {
      from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
        .pipe(operator((x: any) => of(x).pipe(delay(2000))))
        .subscribe(
          console.log,
          () => {},
          () => console.log(`${operator.name} completed`)
        );
    };

    example(switchMap)();

    // ===============================
    const user$ = this.getUser(1).pipe(
      switchMap((user) => this.getUserDetails(user))
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
