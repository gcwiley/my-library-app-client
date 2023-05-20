import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// import the auth service
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent {
  // inject the router, form builder, and auth service
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  // create the sign up form
  signupForm = this.formBuilder.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
  });

  // sign up user with email and password
  onSubmitSignUp() {
    this.authService
      .SignUpUser(this.signupForm.value.email!, this.signupForm.value.password!)
      .then(() => {
        // navigates user to the main page
        this.router.navigateByUrl('/');
      })
      // if error, display the error message
      .catch((error) => {
        window.alert(error.message);
      });
  }

  getErrorMessage() {
    if (this.signupForm.hasError('required')) {
      return 'Please enter a email address';
    }

    return this.signupForm.hasError('email') ? 'Not a valid email address' : '';
  }
}
