import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  logTimeFromComponent(componentName: string) {
    console.log(`This method was called by: ${componentName} on ${new Date()}`);
  }
}
