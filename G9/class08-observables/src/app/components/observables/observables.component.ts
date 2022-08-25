import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, interval, Observable, of, Subscription } from 'rxjs';
import { ObservablesService } from 'src/app/services/observables.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservablesComponent implements OnInit, OnDestroy {
  title = 'observables-class';
  someNumbers = [1, 2, 3, 4, 5, 6, 7];
  fromObs = from(this.someNumbers);
  ofObs = of(this.someNumbers, 'Ivan', 'Borche');
  numberEmitterObs = new Observable(function subscribe(subscriber) {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.complete();
    subscriber.next(4); // Is not delivered because it would violate the contract
  });
  intervalEmitter = interval(1000);

  intervalSub: Subscription;

  constructor(private os: ObservablesService) {}

  ngOnInit() {
    this.fromObs.subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('from complete');
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
        console.log('of complete');
      },
    });

    this.numberEmitterObs.subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('new obs complete');
      },
    });
    this.intervalSub = this.intervalEmitter.subscribe((val) => {
      console.log('interval:', val);
      console.log(String.fromCharCode(val + 97));
    });

    this.os.servintervalEmitter.subscribe((val) => {
      console.log(val);
    })
  }

  ngOnDestroy(): void {
    this.intervalSub.unsubscribe();
    console.log('INTERVAL DESTROYED');
  }
}
