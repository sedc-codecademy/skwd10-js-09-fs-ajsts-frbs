import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../interfaces/person';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(userArray: Person[], filterValue: number): Person[] {
    let filteredUserArray: Person[] = [];
    if (userArray.length === 0) {
      return userArray;
    }

    filteredUserArray = userArray.filter(
      (person: Person) => person.rating >= filterValue
    );
    return filteredUserArray;
  }
}

/* Pipes don't have to accept strings as input value.
It can be anything, such as our Person array here which we can
then use for something like an ngFor.
*/