import { Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  filter,
  map,
  Observable,
  of,
  Subscription,
  take,
  takeUntil,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss'],
})
export class OperatorsComponent implements OnInit {
  public usersNames = [
    'Janko',
    'Petko',
    'Stanko',
    'Lazar',
    'Krsto',
    'Stojan',
    'Blazhe',
    'Laste',
    'Ratko',
    'Sveto',
    'Risto',
    'Mile',
  ];
  userSubject = new BehaviorSubject<string[]>(this.usersNames);
  $users = this.userSubject as Observable<string[]>;
  userSub: Subscription;
  updatedUsers: string[] = [];

  $ofUsers = of(...this.usersNames);

  constructor() {}

  ngOnInit(): void {
    // // Map Operator
    // this.userSub = this.$users
    //   .pipe(map((users) => users.map((user) => `${user}!`)))
    //   .subscribe((users) => {
    //     this.updatedUsers = users;
    //   });

    // Filter Operator
    // this.$ofUsers
    //   .pipe(filter((user) => user.startsWith('S')))
    //   .subscribe((user) => {
    //     this.updatedUsers.push(user);
    //   });

    // Take Operator
    // this.$ofUsers.pipe(take(5)).subscribe((user) => {
    //   this.updatedUsers.push(user);
    // });

    // Tap Operator
    this.$ofUsers
      .pipe(tap((user) => console.log('USER:', user)))
      .subscribe((user) => {
        this.updatedUsers.push(user);
      });
  }
}
