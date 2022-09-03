import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, Subject } from 'rxjs';

export interface Product {
  id: number | string;
  title: string;
  price: number | string;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: string | number;
  count: string | number;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  productsSubject = new Subject<Product[]>();

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  getAllProducts() {
    this.http
      .get('https://fakestoreapi.com/products/')
      .pipe(map((products) => products as Product[]))
      .subscribe((products) => this.productsSubject.next(products));
  }

  loginUser(email: string, password: string) {
    //Http logic to login user
    console.log(email, password);
    //Open snackbar on login
    this.snackBar.open('Succesfully logged in!', 'Dismiss!', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}
