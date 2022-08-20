import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  maximumCommentSize: number = 16;
  paymentType = ['cash', 'card'];
  expenseForm: FormGroup;
  blockedTitleNames: string[] = ['Jack', 'Smith', 'Jill'];

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  onFormSubmit() {
    console.log(this.expenseForm);
  }

  initForm() {
    this.expenseForm = new FormGroup({
      basicData: new FormGroup({
        title: new FormControl(null, [
          Validators.required,
          this.blockedNamesValidation,
        ]),
        amount: new FormControl(0, [Validators.required, Validators.max(20)]),
        date: new FormControl('2022-10-10', Validators.required),
      }),
      priority: new FormControl('medium'),
      comment: new FormControl(
        '',
        Validators.maxLength(this.maximumCommentSize)
      ),
      payType: new FormControl('card'),
    });
  }

  blockedNamesValidation = (
    control: FormControl
  ): { [key: string]: boolean } | null => {
    if (this.blockedTitleNames.includes(control.value)) {
      return { nameIsForbidden: true };
    }
    return null;
  };
}

// Form States
// Touched vs. Untouched - Whether it was clicked in/out
// Dirty vs. Pristine
// Invalid vs. Valid
