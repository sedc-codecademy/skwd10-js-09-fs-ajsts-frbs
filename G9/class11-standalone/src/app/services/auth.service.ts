import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

export interface User {
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  currentUser$ = new BehaviorSubject<User | null>(null);

  registerUser(email: string, password: string) {
    this.http
      .post('https://movies-api-sedc.herokuapp.com/auth/register', {
        email,
        password,
      })
      .pipe(map((user) => user as User))
      .subscribe({
        next: (user) => this.currentUser$.next(user),
        error: (err) => console.error(err),
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
        next: (user) => this.currentUser$.next(user),
        error: (err) => console.error(err),
      });
  }

  logoutUser() {
    this.currentUser$.next(null);
  }
}
