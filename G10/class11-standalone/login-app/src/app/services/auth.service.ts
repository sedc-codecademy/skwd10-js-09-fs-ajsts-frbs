import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';

const AUTH_URL = 'https://movies-api-sedc.herokuapp.com/auth';

export interface User {
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  currentUser$ = new BehaviorSubject<User | null>(null);

  registerWithEmailAndPassword(email: string, password: string) {
    this.http
      .post(`${AUTH_URL}/register`, { email, password })
      .pipe(map((data) => data as User))
      .subscribe({
        next: (data) => {
          this.currentUser$.next(data);
          this.router.navigate(['']);
        },
        error: (err) => console.log(err),
      });
  }

  loginWithEmailAndPassword(email: string, password: string) {
    this.http
      .post(`${AUTH_URL}/login`, { email, password })
      .pipe(map((data) => data as User))
      .subscribe({
        next: (data) => {
          this.currentUser$.next(data);
          this.router.navigate(['']);
        },
        error: (err) => console.log(err),
      });
  }

  logoutUser() {
    this.currentUser$.next(null);
  }
}
