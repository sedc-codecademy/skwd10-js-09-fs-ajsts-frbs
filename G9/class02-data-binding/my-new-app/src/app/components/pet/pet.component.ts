import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss'],
})
export class PetComponent implements OnInit {
   //With the input decorator we are expecting the prop to be passed from the parent.
  @Input() titleFromParent: string;
  @Input() type: string;
  @Output() addLike: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onAddLike() {
    // Even though the event emitter's data type is a string, you don't have to emit a value.
    this.addLike.emit();
  }

}
