import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  // template: '<h1> Hello from Pets Component</h1>',
  styleUrls: ['./pets.component.scss'],
  // styles: []
})
export class PetsComponent implements OnInit {
  constructor() {}
  @Input() titleReceive: string;
  @Input() petFromParent: any;
  //With the output decorator we are emmiting an event that will pass data to the parent.
  @Output() titleToSendToParent: EventEmitter<string> =
    new EventEmitter<string>();
  @Output() addLike: EventEmitter<void> = new EventEmitter<void>();

  titleToSend: string = 'Title sent from child to parent!';

  pet = {
    title: 'Ben',
    type: 'Dog',
  };

  pet2 = {
    title: 'Ivan',
    type: 'Cat',
  };

  sendTitleToParent() {
    this.titleToSendToParent.emit(this.titleToSend);
  }

  onAddLike() {
    this.addLike.emit();
  }
  
  ngOnInit(): void {}
}
