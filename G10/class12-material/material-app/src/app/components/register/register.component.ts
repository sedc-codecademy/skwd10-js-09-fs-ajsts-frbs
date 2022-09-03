import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  pricingTiers = ['free', 'premium', 'deluxe', 'enterprise'];

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      pricingTier: new FormControl('free', [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      subscribed: new FormControl(false),
    });
  }

  onFormSumbit() {
    console.log(this.registerForm.value);
  }
}
