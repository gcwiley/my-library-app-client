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

// App Routing Module
import { AppRoutingModule } from './app-routing.module';

// Main App Component
import { AppComponent } from './app.component';

// Post Components
import { PostComponentsModule } from './posts/post.module';

// issue Components
import { IssueComponentsModule } from './issues';

// Shared Component
import { SharedComponentsModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatNativeDateModule,
    AngularFireModule.initializeApp(environment.firebase),
    BooksComponentsModule,
    SharedComponentsModule,
    PagesModule,
    PostComponentsModule,
    IssueComponentsModule,
    ImageComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
