import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// import angular material modules
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

// import app header
import { HeaderComponent, AnnouncementBannerComponent, FooterComponent } from 'src/app/shared';

// import the auth service
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HeaderComponent,
    AnnouncementBannerComponent,
    FooterComponent,
  ],
})
export class ResetPasswordPageComponent {
  // inject the router, form builder, and auth service
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  // create the password reset form
  passwordResetForm = this.formBuilder.group({
    email: ['', Validators.required, Validators.email],
  });

  // sends password reset email to user
  onSubmitResetPassword() {
    this.authService
      .SendPasswordResetEmail(this.passwordResetForm.value.email!)
      .then(() => {
        // navigates user to the main page
        this.router.navigateByUrl('/');
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
