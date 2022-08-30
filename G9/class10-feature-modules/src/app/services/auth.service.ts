import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';

export interface User {
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser$ = new BehaviorSubject<User | null>(null);
  constructor(private http: HttpClient, private router: Router) {}

  registerWithEmailAndPassword(email: string, password: string) {
    this.http
      .post('https://movies-api-sedc.herokuapp.com/auth/register', {
        email,
        password,
      })
      .pipe(map((user) => user as User))
      .subscribe({
        next: (user) => {
          this.currentUser$.next(user);
          this.router.navigate(['']);
        },
        error: (err) => console.error(err),
      });
  }

  signInWithEmailAndPassword(email: string, password: string) {
    this.http
      .post('https://movies-api-sedc.herokuapp.com/auth/login', {
        email,
        password,
      })
      .pipe(map((user) => user as User))
      .subscribe({
        next: (user) => {
          this.currentUser$.next(user);
          this.router.navigate(['']);
        },
        error: (err) => console.error(err),
      });
  }

  logoutUser() {
    this.currentUser$.next(null);
    this.router.navigate(['']);
  }
}
