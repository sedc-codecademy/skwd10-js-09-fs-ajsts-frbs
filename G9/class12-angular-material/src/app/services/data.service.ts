import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface User {
  email: string;
}

export interface Rating {
  rate: string | number;
  count: string | number;
}

export interface Product {
  id: number | string;
  title: string;
  price: number | string;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}
  currentUser$ = new BehaviorSubject<User | null>(null);
  productData$ = new Subject<Product[]>();

  getAllProducts() {
    this.http
      .get('https://fakestoreapi.com/products/')
      .pipe(map((products) => products as Product[]))
      .subscribe({
        next: (products) => {
          this.productData$.next(products);
          this.snackbar.open('Products retrieved!', 'Dismiss!', {
            duration: 1000,
            verticalPosition: 'top',
          });
        },
        error: (err) => {
          this.snackbar.open('Something went wrong!', 'Dismiss!', {
            duration: 2000,
            verticalPosition: 'top',
            horizontalPosition: 'end',
          });
        },
      });
  }

  loginUser(email: string, password: string) {
    this.http
      .post('https://movies-api-sedc.herokuapp.com/auth/login', {
        email,
        password,
      })
      .pipe(map((user) => user as User))
      .subscribe({
        next: (user) => {
          this.currentUser$.next(user);
          this.snackbar.open('Login successful!', 'Dismiss!', {
            duration: 2000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
          });
        },
        error: (err) => {
          this.snackbar.open('Login not successful!', 'Dismiss!', {
            duration: 2500,
            horizontalPosition: 'end',
            verticalPosition: 'top',
          });
        },
      });
  }

  registerUser(email: string, password: string) {
    this.http
      .post('https://movies-api-sedc.herokuapp.com/auth/register', {
        email,
        password,
      })
      .pipe(map((user) => user as User))
      .subscribe({
        next: (user) => {
          this.currentUser$.next(user);
          this.snackbar.open('User created!', 'Dismiss!', {
            duration: 2000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
          });
        },
        error: (err) => console.error(err),
      });
  }
}
