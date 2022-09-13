import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  user,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser$ = user(this.auth);

  constructor(private router: Router, private auth: Auth) {}

  async loginUser(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      this.router.navigate(['']);
    } catch (error) {
      console.log(error);
    }
  }

  async registerUser(email: string, password: string) {
    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
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
