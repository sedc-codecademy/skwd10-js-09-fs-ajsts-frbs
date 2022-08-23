import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, of, interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservablesComponent implements OnInit, OnDestroy {
  numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  fromObs: Observable<number> = from(this.numbersArray);

  ofObs = of(this.numbersArray, 'Boris', [1, 2, 3], 'Ivan', 'Test', true);

  intervalSubscription: Subscription;

  numberEmitterObs = new Observable(function subscribe(subscriber) {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.complete();
    subscriber.next(4);
    subscriber.next(5);
    subscriber.next(6);
  });

  intervalObs = interval(1000);

  constructor() {}

  ngOnInit(): void {
    this.fromObs.subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('From Obs Complete');
      },
    });

    this.ofObs.subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Of Obs Complete');
      },
    });

    console.log('Manual Obs Start');
    this.numberEmitterObs.subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Manual Observable Complete');
      },
    });

    this.intervalSubscription = this.intervalObs.subscribe({
      next: (value) => console.log('Interval value: ', value),
    });
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }
}
