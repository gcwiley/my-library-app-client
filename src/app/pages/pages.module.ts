import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // forms

// import the material module
import { MaterialModule } from '../material.module';

// import the shared components module
import { SharedComponentsModule } from '../shared/shared.module';

// import the book components module
import { BooksComponentsModule } from '../books/books.module';

// import the issue module
import { IssueComponentsModule } from '../issues/issue.module';

// page components
import { AboutPageComponent } from './about-page/about-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SupportPageComponent } from './support-page/support-page.component';
// add new pages here

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedComponentsModule,
    BooksComponentsModule,
    IssueComponentsModule,
  ],
  declarations: [
    AboutPageComponent,
    CreatePageComponent,
    DetailsPageComponent,
    ForgotPasswordPageComponent,
    MainPageComponent,
    NotFoundPageComponent,
    SigninPageComponent,
    SignupPageComponent,
    SupportPageComponent,
  ],
  exports: [
    AboutPageComponent,
    CreatePageComponent,
    DetailsPageComponent,
    ForgotPasswordPageComponent,
    MainPageComponent,
    NotFoundPageComponent,
    SigninPageComponent,
    SignupPageComponent,
    SupportPageComponent,
  ],
})
export class PagesModule {}
