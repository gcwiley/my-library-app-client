import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import the route guard
import { RouteGuard } from './guards/route.guard';

// import the about page
import { AboutPageComponent } from './pages/about-page/about-page.component';

// import the create page
import { CreatePageComponent } from './pages/create-page/create-page.component';

// import the details page
import { DetailsPageComponent } from './pages/details-page/details-page.component';

// import the main page
import { MainPageComponent } from './pages/main-page/main-page.component';

// import the not found page
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

// import the forgot password page
import { ResetPasswordPageComponent } from './pages/reset-password-page/reset-password-page.component';

// import the sign in page
import { SigninPageComponent } from './pages/signin-page/signin-page.component';

// import the sign up page
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

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
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
