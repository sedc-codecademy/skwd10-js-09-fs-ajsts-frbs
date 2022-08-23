import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  paymentType = ['cash', 'card'];
  expenseForm: FormGroup;
  maximumCommentSize: number = 16;
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
        title: new FormControl('', [
          Validators.required,
          this.blockedNamesValidation,
        ]),
        amount: new FormControl(0, [Validators.required, Validators.max(20)]),
        date: new FormControl('2022-10-10', Validators.required),
      }),
      priority: new FormControl('medium'),
      comment: new FormControl('', [
        Validators.maxLength(this.maximumCommentSize),
      ]),
      payType: new FormControl('card'),
    });
  }

  // expenseForm.value {
  //   title,
  //   amount,
  //   date,
  //   priority,
  //   comment,
  //   payType
  // }

  blockedNamesValidation = (
    control: FormControl
  ): { [key: string]: boolean } | null => {
    if (this.blockedTitleNames.includes(control.value)) {
      // This means the validation was failed
      return { nameIsForbidden: true };
    }
    // This means the validation was passed
    return null;

    // This will not work
    // return { nameIsForbidden: false };
  };
}
