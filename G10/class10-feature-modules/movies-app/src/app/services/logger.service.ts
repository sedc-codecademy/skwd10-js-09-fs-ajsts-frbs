import { Injectable } from '@angular/core';

@Injectable({
  //Usable by all modules and their components in the whole app
  providedIn: 'root',
})
//Only one instance will be created of this class when provided in root
export class LoggerService {
  title = 'logger service';

  constructor() {}

  getTitle() {
    return this.title;
  }

  logTime(componentName: string) {
    console.log(
      `Method was called from component: ${componentName} and the current time is ${new Date()}`
    );
  }
}
