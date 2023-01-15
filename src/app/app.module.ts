// Angular Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';

// Import Firebase
import { AngularFireModule } from '@angular/fire/compat';

// Import Firebase Environmental Variables
import { environment } from '../environments/environment';

// Angular Material Import
import { MaterialModule } from './material-module';

// Main App Component
import { AppComponent } from './app.component';


// PAGES
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SigninComponent } from './auth/signin/signin.component';


// Main Home Page Component


// Book Components
import { BookFormComponent } from './books/book-form/book-form.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookGridComponent } from './books/book-grid/book-grid.component';

// Layout Components
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';

// Auth Components

import { SignupComponent } from './auth/signup/signup.component';

// App Routing Module
import { AppRoutingModule } from './app-routing.module';

// Feedback Page
import { FeedbackFormComponent } from './comments/comment-form/comment-form.component';
import { FeedbackListComponent } from './comments/comment-list/comment-list.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { ThemePickerComponent } from './shared/theme-picker/theme-picker.component';
import { SupportPageComponent } from './pages/support-page/support-page.component';


@NgModule({
  declarations: [
    AppComponent,
    BookFormComponent,
    BookDetailsComponent,
    FooterComponent,
    SigninComponent,
    HeaderComponent,
    FeedbackFormComponent,
    FeedbackListComponent,
    NavMenuComponent,
    BookGridComponent,
    MainPageComponent,
    SigninComponent,
    CarouselComponent,
    ThemePickerComponent,
    SignupComponent,
    SupportPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    MatNativeDateModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
