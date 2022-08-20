import { Injectable } from '@angular/core';
import { Expense } from '../interfaces/expense';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  expenses: Expense[] = [];
  constructor() {}

  createNewExpense(expense: Expense) {
    this.expenses = [...this.expenses, expense];
    console.log(this.expenses);
  }
}
