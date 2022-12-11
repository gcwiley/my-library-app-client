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

// Import Angular Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular Material Import
import { MaterialModule } from './material-module';

// Main App Component
import { AppComponent } from './app.component';

// Main Home Page Component
import { MainPageComponent } from './main-page/main-page.component';

// Book Components
import { BookFormComponent } from './books/book-form/book-form.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookGridComponent } from './books/book-grid/book-grid.component';

// Layout Components
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';

// Auth Components
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

// App Routing Module
import { AppRoutingModule } from './app-routing.module';

// Feedback Page
import { FeedbackFormComponent } from './feedback/feedback-form/feedback-form.component';
import { FeedbackListComponent } from './feedback/feedback-list/feedback-list.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { ThemePickerComponent } from './shared/theme-picker/theme-picker.component';


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
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
