import { Component } from '@angular/core';
import { Person } from './helpers/person.interface';

enum ClassesEnum {
  REACT = 'React',
  ANGULAR = 'Angular',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'First Angular Application';
  description = 'This application was created with the angular cli';
  numberOfClasses = 15;
  personOne: Person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 45,
    petName: 'Rex',
  };

  frameworkStudied: ClassesEnum = ClassesEnum.REACT;

  isBtnDisabled = true;

  inputValue: string = '';

  readonly imgSrc: string =
    'https://repository-images.githubusercontent.com/24195339/87018c00-694b-11e9-8b5f-c34826306d36';

  printPersonInfo(): string {
    return `${this.personOne.firstName} ${this.personOne.lastName} is ${this.personOne.age} years old, and their pet's name is ${this.personOne.petName}`;
  }

  printFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  }

  onFrameworkChange() {
    console.log('Framework Change Function Called');
    this.frameworkStudied = ClassesEnum.ANGULAR;
  }

  onInputValueChange(event: Event) {
    console.log(event);

    //Exactly the same functionality , different syntax
    const target = event.target as HTMLInputElement;
    // const target = <HTMLInputElement>event.target;

    this.inputValue = target.value;
  }
}
