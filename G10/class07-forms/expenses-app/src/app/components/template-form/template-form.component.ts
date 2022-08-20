import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent implements OnInit, AfterViewInit {
  expenseCommentValue = '';
  maxCommentLength = 30;
  paymentType: string[] = ['cash', 'card'];

  @ViewChild('expenseForm') expenseForm: NgForm;
  @ViewChild('expenseTitle') expenseTitle: NgModel;
  @ViewChild('submitBtn') submitBtn: ElementRef;

  constructor() {}

  ngOnInit(): void {
    console.log(this.expenseForm);
    console.log(this.expenseTitle);
  }

  ngAfterViewInit(): void {
    console.log(this.expenseForm);
    console.log(this.expenseTitle);
    console.log(this.submitBtn.nativeElement);
  }

  onFormSubmit(form: NgForm) {
    console.log('From the paramateres');
    console.log(form);
    console.log(form.value);

    console.log('From view child');
    console.log(this.expenseForm);
    console.log(this.expenseForm.value);

    console.log('Title view child');
    console.log(this.expenseTitle);
    console.log(this.expenseTitle.value);

    // console.log(form.valid);
    // console.log(form.value);
  }
}
