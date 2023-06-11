import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// import the auth service
import { AuthService } from '../../services/auth.service';

// Signin Component
@Component({
  selector: 'app-signin',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss'],
})
export class SigninPageComponent {
  // inject the router, form builder, and auth service
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  // create the signin form with email and password fields
  signinForm = this.formBuilder.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
  });

  getErrorMessage() {
    if (this.signinForm.get('email')?.hasError('required')) {
      return 'Please enter a valid e-mail address.';
    }

    return this.signinForm.get('email')?.hasError('email')
      ? 'Not a valid email address'
      : '';
  }

  // sign in user with email and password
  // if successful, navigates user to the main page
  onSubmitSignIn() {
    this.authService
      .SigninUserwithEmailAndPassword(
        this.signinForm.value.email!,
        this.signinForm.value.password!
      )
      .then(() => {
        // navigates user to the main page
        this.router.navigateByUrl('/');
      })
      // if error, display the error message
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
