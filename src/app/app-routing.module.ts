import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import the route guard
import { RouteGuard } from './guards/route.guard';

// import pages
import {
   AboutPageComponent,
   AddBookPageComponent,
   BookGridPageComponent,
   BookListPageComponent,
   BookDetailsPageComponent,
   FeedbackPageComponent,
   IssuesPageComponent,
   MainPageComponent,
   NotFoundPageComponent,
   UserProfilePageComponent,
   ResetPasswordPageComponent,
   SigninPageComponent,
   SignupPageComponent,
} from './pages';

const routes: Routes = [
   {
      path: '',
      component: MainPageComponent,
      canActivate: [RouteGuard],
   },
   {
      path: 'books',
      component: BookGridPageComponent,
      canActivate: [RouteGuard],
   },
   {
      path: 'books/:id',
      component: BookDetailsPageComponent,
      canActivate: [RouteGuard],
   },
   // manage my books
   { path: 'manage-books', component: BookListPageComponent},
   // add a new book
   { path: 'create-book', component: AddBookPageComponent, canActivate: [RouteGuard] },
   // edit existing book
   {
      path: 'edit-book/:id',
      component: AddBookPageComponent,
      canActivate: [RouteGuard],
   },

   { path: 'signin', component: SigninPageComponent },
   { path: 'signup', component: SignupPageComponent },
   { path: 'reset-password', component: ResetPasswordPageComponent },
   { path: 'about', component: AboutPageComponent, canActivate: [RouteGuard] },
   { path: 'profile', component: UserProfilePageComponent, canActivate: [RouteGuard] },
   // add new issue - submit-feedback
   { path: 'submit-feedback', component: FeedbackPageComponent, canActivate: 
   [RouteGuard] },
   // edit existing issue
   { path: 'edit-issue/:id', component: FeedbackPageComponent, canActivate: [RouteGuard]},
   { path: 'issues', component: IssuesPageComponent, canActivate: [RouteGuard] },
   { path: '**', component: NotFoundPageComponent },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
