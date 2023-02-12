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

// App Routing Module
import { AppRoutingModule } from './app-routing.module';

// Main App Component
import { AppComponent } from './app.component';

// PAGES
import { PagesModule } from './pages/pages.module';

// Book Components
import { BooksModule } from './books/books.module';

// Post Components
import { PostFormComponent } from './posts/post-form/post-form.component';
import { PostListComponent } from './posts/post-list/post-list.component';

// Comment Components
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';

// Image Components
import { ImageUploadFormComponent } from './images/image-upload-form/image-upload-form.component';
import { ImageGridComponent } from './images/image-grid/image-grid.component';

// Shared Component
import { SharedComponentsModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostListComponent,
    CommentFormComponent,
    CommentListComponent,
    ImageUploadFormComponent,
    ImageGridComponent,
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
    BooksModule,
    SharedComponentsModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
