import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(users: User[], filterValue: string): User[] {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(filterValue.toLowerCase().trim())
    );

    // if (!filterValue) {
    //   return users;
    // }
    // const filteredUsers = users.filter(
    //   (user) => user.hourlyRate <= Number(filterValue)
    // );

    return filteredUsers;
  }
}
