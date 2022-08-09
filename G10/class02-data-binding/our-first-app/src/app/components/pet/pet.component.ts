import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss'],
})
export class PetComponent {
  @Input() titleFromParent = '';
  @Input() petType = '';

  childTitle = 'I am sent from the pet component';

  @Output() titleToParent: EventEmitter<string> = new EventEmitter<string>();

  onTitleSend() {
    console.log('Title sent method called');
    this.titleToParent.emit(this.childTitle);
  }
}
