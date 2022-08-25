import { AfterViewChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ObservablesService } from 'src/app/services/observables.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent implements OnInit {
  namesSubscription: Subscription;
  nameArr: string[];
  nameInput: FormControl;
  fruitInput: FormControl;
  get $fruitObs() {
    return this.obsService.$fruitObs;
  }
  constructor(private obsService: ObservablesService) {}

  ngOnInit(): void {
    this.nameInput = new FormControl('');
    this.fruitInput = new FormControl('');
    this.namesSubscription = this.obsService.nameSubject.subscribe({
      next: (values) => {
        this.nameArr = values;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.obsService.getNames();
  }

  onAddName() {
    this.obsService.addName(this.nameInput.value);
    this.nameInput.reset();
  }
  onAddFruit() {
    this.obsService.addFruit(this.fruitInput.value);
    this.fruitInput.reset();
  }
}
