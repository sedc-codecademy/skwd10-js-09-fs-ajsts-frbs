import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ObservablesService } from 'src/app/services/observables.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent implements OnInit {
  nameInput: FormControl;
  fruitInput: FormControl;

  nameArray: string[];

  constructor(private obsService: ObservablesService) {}

  get $fruitObs() {
    return this.obsService.$fruitObs;
  }

  ngOnInit(): void {
    this.nameInput = new FormControl('');
    this.fruitInput = new FormControl('');

    this.obsService.nameSubject.subscribe((value) => {
      this.nameArray = value;
    });
    this.obsService.getNames();
  }

  onAddName() {
    this.obsService.addName(this.nameInput.value);
  }

  onAddFruit() {
    this.obsService.addFruit(this.fruitInput.value);
  }
}
