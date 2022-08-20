import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  expenseForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.expenseForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      amount: new FormControl(0, [
        Validators.required,
        Validators.min(1),
        Validators.max(500),
      ]),
    });
  }

  onFormSubmit() {
    console.log(this.expenseForm);
  }
}
