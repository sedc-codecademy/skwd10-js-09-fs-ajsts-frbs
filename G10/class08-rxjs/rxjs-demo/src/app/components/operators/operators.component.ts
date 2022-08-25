import { Component, OnInit } from '@angular/core';
import { filter, from, map, of, take, tap } from 'rxjs';

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
    'Boris',
    'Slavko',
    'Stefan',
    'Stamencho',
  ];

  updatedNames: string[] = [];

  //Emit names one by one
  $fromUserNamesObs = from(this.usersNames).pipe(
    map((value) => value + ' Arsov')
  );

  //Emits entire array as one event
  //Pipes can be added without subcrbing ( when observable is created )
  $ofUserNameObs = of(this.usersNames).pipe(
    map((value) => value.map((name) => name + ' Arsov'))
  );

  constructor() {
    //Map Operator
    // this.$ofUserNameObs.subscribe((value) => {
    //   this.updatedNames = value;
    // });
    //Filter Operator
    // this.$fromUserNamesObs
    //   .pipe(filter((value) => value.startsWith('R')))
    //   .subscribe((value) => {
    //     console.log('Event: ', value);
    //     this.updatedNames.push(value);
    //   });
    //Take Operator
    // this.$fromUserNamesObs.pipe(take(5)).subscribe((value) => {
    //   this.updatedNames.push(value);
    // });
    //Chaining Piped Operators
    this.$fromUserNamesObs
      .pipe(
        filter((value) => value.startsWith('S')),
        take(2),
        map((value) => value.toUpperCase())
      )
      .subscribe((value) => {
        console.log('Event: ', value);
        this.updatedNames.push(value);
      });
    //Tap Operator
    // this.$fromUserNamesObs
    //   .pipe(tap((value) => console.log('Event:' + value)))
    //   .subscribe((value) => {
    //     this.updatedNames.push(value);
    //   });
  }

  ngOnInit(): void {}
}
