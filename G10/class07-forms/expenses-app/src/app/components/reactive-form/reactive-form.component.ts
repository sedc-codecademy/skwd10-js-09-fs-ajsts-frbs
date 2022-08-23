import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  expenseForm: FormGroup;
  paymentType: string[] = ['cash', 'card'];
  blockedWords: string[] = [
    'money',
    'casino',
    'betting',
    'french words',
    'drugs',
  ];

  maxCommentLength: number = 30;

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.expenseForm = new FormGroup({
      basicData: new FormGroup({
        title: new FormControl('', [
          Validators.required,
          this.blockedWordsValidator,
        ]),
        amount: new FormControl(null, [
          Validators.required,
          Validators.min(1),
          Validators.max(500),
        ]),
        date: new FormControl('2022-08-23', [Validators.required]),
      }),
      priority: new FormControl('medium'),
      comment: new FormControl('', [Validators.maxLength(30)]),
      expenseType: new FormControl('card'),
    });
  }

  blockedWordsValidator = (
    control: FormControl
  ): { [key: string]: boolean } | null => {
    if (this.blockedWords.includes(control.value)) {
      return { wordIsForbidden: true };
    }

    return null;
  };

  onFormSubmit() {
    console.log(this.expenseForm);
    console.log(this.expenseForm.value);
  }
}
