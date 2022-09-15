import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import {
  Auth,
  createUserWithEmailAndPassword,
  user,
  signOut,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: Auth
  ) {}

  // currentUser$ = new BehaviorSubject<User | null>(null);
  currentUser$ = user(this.auth);

  async registerWithEmailAndPassword(email: string, password: string) {
    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
      this.router.navigate(['']);
    } catch (error) {
      console.log(error);
    }
  }

  async signInWithEmailAndPassword(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      this.router.navigate(['']);
    } catch (error) {
      console.log(error);
    }
  }

  logoutUser() {
    signOut(this.auth);
    this.router.navigate(['']);
  }
}
