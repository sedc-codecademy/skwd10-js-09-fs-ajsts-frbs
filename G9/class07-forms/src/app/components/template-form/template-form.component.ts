import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent implements OnInit {
  public maximumCommentSize: number = 16;
  public paymentType: string[] = ['cash', 'card'];
  public expenseCommentValue: string = '';
  @ViewChild('expenseForm') expenseForm: NgForm;
  @ViewChild('expenseTitle') expenseTitle: NgModel;

  constructor() {}

  ngOnInit(): void {}

  // onFormSubmit(expenseForm: NgForm) {
  //   console.log(expenseForm);
  // }
  onFormSubmit() {
    console.log(this.expenseForm.value);
    console.log(this.expenseTitle);
  }
}
