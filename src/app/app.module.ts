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
import { MaterialModule } from './material.module';

// App Routing Module
import { AppRoutingModule } from './app-routing.module';

// Main App Component
import { AppComponent } from './app.component';

// PAGES
import { PagesModule } from './pages/pages.module';

// Book Components
import { BooksComponentsModule } from './books/books.module';

// Post Components
import { PostComponentsModule } from './posts/post.module';

// Comment Components
import { CommentComponentsModule } from './comments/comment.module';

// Image Components
import { ImageComponentModule } from './images/images.module';

// Shared Component
import { SharedComponentsModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
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
    BooksComponentsModule,
    SharedComponentsModule,
    PagesModule,
    PostComponentsModule,
    CommentComponentsModule,
    ImageComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
