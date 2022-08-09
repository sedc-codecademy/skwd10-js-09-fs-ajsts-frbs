import { Component } from '@angular/core';

@Component({
  selector: 'app-pets',
  //   template: '<h1 class="pets__heading">{{title}}</h1>',
  //   styles: [
  //     `
  //       .pets__heading {
  //         color: navy;
  //         background-color: lightpink;
  //       }
  //     `,
  //   ],
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
})
export class PetsComponent {
  title: string = 'Pets Component';

  parentTitle: string = 'This was sent from the parent';
  type: string = 'Cat';

  titleFromChild = '';

  onTitleSent(value: string) {
    console.log(value);
    this.titleFromChild = value;
  }
}
