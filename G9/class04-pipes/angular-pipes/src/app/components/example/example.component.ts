import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  // standalone: true
})
export class ExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

// Standalone components replace this
@NgModule({
  declarations: [ExampleComponent],
  providers: [],
})
export class ExampleModule {}
