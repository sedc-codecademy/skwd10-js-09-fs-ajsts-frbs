import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObservablesService {
  nameArray = ['Jack', 'Smith', 'Jill', 'Thomas'];
  nameSubject: Subject<string[]> = new Subject<string[]>();

  fruitArray = ['Apple', 'Orange', 'Banana', 'Lemon'];
  fruitBehaviorSubject = new BehaviorSubject<string[]>(this.fruitArray);
  $fruitObs = this.fruitBehaviorSubject as Observable<string[]>;
  servintervalEmitter = interval(1000);

  constructor() {}

  getNames() {
    this.nameSubject.next([...this.nameArray]);
  }

  addName(name: string) {
    this.nameArray.push(name);
    // this.nameArray = [...this.nameArray, name];
    // this.nameSubject.next(this.nameArray);
  }

  addFruit(fruit: string) {
    this.fruitArray.push(fruit);
  }
}
