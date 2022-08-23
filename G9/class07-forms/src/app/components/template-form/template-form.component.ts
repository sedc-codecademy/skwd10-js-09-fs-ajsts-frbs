import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent implements OnInit, AfterViewInit {
  maximumCommentSize: number = 16;
  public paymentType: string[] = ['cash', 'card'];
  public expenseCommentValue: string = '';
  @ViewChild('expenseForm') expenseForm: NgForm;
  constructor() {}

  ngOnInit(): void {
    console.log('onInit', this.expenseForm);
  }

  ngAfterViewInit(): void {
    console.log('after view init', this.expenseForm);
  }

  // This is the equivalent of [(ngModel)]="expenseCommentValue"
  // onInput(event: any) {
  //   this.expenseCommentValue += event.data;
  // }

  // onFormSubmit(expenseForm: NgForm) {
  //   console.log(expenseForm);
  // }

  onFormSubmit() {
    console.log(this.expenseForm);
  }
}

// Form States
// Touched vs. Untouched - Whether it was clicked in/out
// Dirty vs. Pristine - Whether a value was entered in the input
// Invalid vs. Valid
