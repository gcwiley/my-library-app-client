import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  signinForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AngularFireAuth
  ) {}

  onSubmitSignIn() {
    this.auth
      .signInWithEmailAndPassword(this.signinForm.value.email, this.signinForm.value.password)
      .then(() => this.router.navigateByUrl('/'));
  }
}
