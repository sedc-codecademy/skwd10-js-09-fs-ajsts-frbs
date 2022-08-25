import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';

const fruits = ['Apple', 'Pear', 'Orange', 'Grape', 'Banana'];

@Injectable({
  providedIn: 'root',
})
export class ObservablesService {
  nameArray = ['Jack', 'Jill', 'Joe', 'Jerry', 'Jonah'];

  nameSubject: Subject<string[]> = new Subject<string[]>();

  fruitBehaviorSubject = new BehaviorSubject<string[]>(fruits);
  //Pipes can be added like so in services
  $fruitObs = (this.fruitBehaviorSubject as Observable<string[]>).pipe(
    map((value) => value.map((fruit) => fruit + ' is tasty!'))
  );

  getNames() {
    console.log('get names called');
    this.nameSubject.next(this.nameArray);
  }

  addName(name: string) {
    this.nameArray = [...this.nameArray, name];
    this.nameSubject.next(this.nameArray);
  }

  addFruit(fruit: string) {
    const fruits = this.fruitBehaviorSubject.getValue();
    this.fruitBehaviorSubject.next([...fruits, fruit]);
  }

  constructor() {}
}
