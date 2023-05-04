import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import the Route Guard
import { RouteGuard } from './guards/route.guard';

// import Main Page
import { MainPageComponent } from './pages/main-page/main-page.component';

// import Book Components
import { BookFormComponent } from './books/book-form/book-form.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';

// import Auth Components
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

// import About Page
import { AboutPageComponent } from './pages/about-page/about-page.component';

// import support page
import { SupportPageComponent } from './pages/support-page/support-page.component';

// import Not Found Page
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    // canActivate: [RouteGuard],
  },
  {
    path: 'books/:id',
    component: BookDetailsComponent,
    // canActivate: [RouteGuard],
  },
  { path: 'create', component: BookFormComponent },
  { path: 'edit/id', component: BookFormComponent },
  {
    path: 'feedback',
    component: SupportPageComponent,
    // canActivate: [RouteGuard],
  },
  { path: 'signin', component: SigninPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
