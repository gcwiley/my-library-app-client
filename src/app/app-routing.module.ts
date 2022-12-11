import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import Route Guard
import { RouteGuard } from './route.guard';

// Main Page / Homepage
import { MainPageComponent } from './main-page/main-page.component';

// Book Components
import { BookFormComponent } from './books/book-form/book-form.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';

// Auth Components
import { SigninComponent } from './auth/signin/signin.component';

// Feedback Page
import { FeedbackFormComponent } from './feedback/feedback-form/feedback-form.component';

// About Page
import { AboutPageComponent } from './about-page/about-page.component';

// Not Found Page
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    canActivate: [RouteGuard],
  },
  {
    path: 'books/:id',
    component: BookDetailsComponent,
    canActivate: [RouteGuard],
  },
  { path: 'create', component: BookFormComponent, canActivate: [RouteGuard] },
  { path: 'edit/id', component: BookFormComponent, canActivate: [RouteGuard] },
  {
    path: 'feedback',
    component: FeedbackFormComponent,
    canActivate: [RouteGuard],
  },
  { path: 'signin', component: SigninComponent },
  { path: 'about', component: AboutPageComponent, canActivate: [RouteGuard] },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
