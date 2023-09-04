import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import the route guard
import { RouteGuard } from './guards/route.guard';

// import pages
import {
  AboutPageComponent,
  CreatePageComponent,
  DetailsPageComponent,
  FeedbackPageComponent,
  IssuesPageComponent,
  MainPageComponent,
  NotFoundPageComponent,
  ProfilePageComponent,
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
    path: 'books/:id',
    component: DetailsPageComponent,
    canActivate: [RouteGuard],
  },
  { path: 'create', component: CreatePageComponent, canActivate: [RouteGuard] },
  {
    path: 'edit/:id',
    component: CreatePageComponent,
    canActivate: [RouteGuard],
  },
  { path: 'signin', component: SigninPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'reset-password', component: ResetPasswordPageComponent },
  { path: 'about', component: AboutPageComponent, canActivate: [RouteGuard] },
  { path: 'profile', component: ProfilePageComponent, canActivate: [RouteGuard] },
  { path: 'feedback', component: FeedbackPageComponent, canActivate: [RouteGuard] },
  { path: 'issues', component: IssuesPageComponent, canActivate: [RouteGuard] },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
