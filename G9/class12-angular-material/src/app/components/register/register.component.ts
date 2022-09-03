import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  pricings: string[] = ['free', 'premium', 'deluxe', 'enterprise'];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      pricingType: new FormControl('premium'),
      gender: new FormControl(''),
      birthdate: new FormControl(''),
    });
  }

  onSubmitRegisterForm() {
    console.log(this.registerForm.value);
    const { email, password } = this.registerForm.value;
    this.dataService.registerUser(email, password);
  }
}
