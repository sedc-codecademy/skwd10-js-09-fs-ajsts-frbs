import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  // transform(value: string, length?: number): string {
  //   // return value.slice(0, length) + '...';
  //   return value.slice(0, length ? length : 3) + '...';
  // }
  transform(value: string, length: number = 3): string {
    // return value.slice(0, length) + '...';
    return value.slice(0, length) + '...';
  }
}

/*
Pipes are technically classes, but you can think of them as pure functions.
Whenever a pipe is used, you instance an object of it and you immediatelly invoke it's transform method.
The transform method accepts the value you wish to somehow transform as its first input argument.
This is the value on the LEFT side of the | operator.
After the first argument, you can also chain arguments that will come from the RIGHT side, after the name of the pipe, wrapped in ""

It is also possible to define the arguments as an array. Like this:
transform(value: string, ...args: unknown[]): string {
    return "somevalue";
  }
  This allows you to provide multiple arguments to the transform method. In the template, invoking the pipe would look like this
  <div> {{someComponentProperty}} | customPipe:"2, 5, 7" </div>
*/
