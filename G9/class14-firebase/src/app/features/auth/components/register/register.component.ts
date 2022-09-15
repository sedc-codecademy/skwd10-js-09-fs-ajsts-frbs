import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,

} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      [this.confirmPasswordValidator]
    );
  }

  onRegisterSubmit() {
    const { email, password } = this.registerForm.value;
    this.authService.registerWithEmailAndPassword(email, password);
  }

  confirmPasswordValidator = (formGroup: any) => {
    if (
      formGroup.controls['password'].value !==
      formGroup.controls['confirmPassword'].value
    ) {
      return { passwordMismatch: true };
    }
    return null;
  };
}
