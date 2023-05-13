import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // forms

// import the material module
import { MaterialModule } from '../material.module';

// import shared components
import { SharedComponentsModule } from '../shared/shared.module';

// import book components
import { BooksComponentsModule } from '../books/books.module';

// page components
import { AboutPageComponent } from './about-page/about-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SupportPageComponent } from './support-page/support-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedComponentsModule,
    BooksComponentsModule,
  ],
  declarations: [
    AboutPageComponent,
    MainPageComponent,
    NotFoundPageComponent,
    SigninPageComponent,
    SignupPageComponent,
    SupportPageComponent,
  ],
  exports: [
    AboutPageComponent,
    MainPageComponent,
    NotFoundPageComponent,
    SigninPageComponent,
    SignupPageComponent,
    SupportPageComponent,
  ],
})
export class PagesModule {}