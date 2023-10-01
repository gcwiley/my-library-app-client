import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import the route guard
import { RouteGuard } from './guards/route.guard';

// import pages
import {
   AboutPageComponent,
   AddBookPageComponent,
   BookGridPageComponent,
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
   { path: 'create', component: AddBookPageComponent, canActivate: [RouteGuard] },
   {
      path: 'edit/:id',
      component: AddBookPageComponent,
      canActivate: [RouteGuard],
   },
   { path: 'signin', component: SigninPageComponent },
   { path: 'signup', component: SignupPageComponent },
   { path: 'reset-password', component: ResetPasswordPageComponent },
   { path: 'about', component: AboutPageComponent, canActivate: [RouteGuard] },
   { path: 'profile', component: UserProfilePageComponent, canActivate: [RouteGuard] },
   { path: 'submit-feedback', component: FeedbackPageComponent, canActivate: [RouteGuard] },
   { path: 'issues', component: IssuesPageComponent, canActivate: [RouteGuard] },
   { path: '**', component: NotFoundPageComponent },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
