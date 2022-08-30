import { Injectable } from '@angular/core';

//Example showing singleton functionality
@Injectable({ providedIn: 'root' })
export class LoggerService {
  logTimeFromComponent(componentName: string) {
    console.log(`This method was called by: ${componentName} on ${new Date()}`);
  }
}
