import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';

export interface User {
  email: string;
}

const AUTH_URL = 'https://movies-api-sedc.herokuapp.com/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser$ = new BehaviorSubject<User | null>(
    localStorage.getItem('user') as User | null
  );

  constructor(private http: HttpClient, private router: Router) {}

  loginWithEmailAndPassword(email: string, password: string) {
    this.http
      .post(AUTH_URL + '/login', { email, password })
      .pipe(map((user) => user as User))
      .subscribe({
        next: (user) => {
          localStorage.setItem('user', user.email);
          this.currentUser$.next(user);
          this.router.navigate(['']);
        },
        error: (err) => console.error(err),
      });
  }

  registerWithEmailAndPassword(email: string, password: string) {
    this.http.post(AUTH_URL + '/register', { email, password }).subscribe({
      next: () => {
        this.router.navigate(['auth', 'login']);
      },
      error: (err) => console.log(err),
    });
  }

  logoutUser() {
    localStorage.clear();
    this.currentUser$.next(null);
    this.router.navigate(['']);
  }
}
