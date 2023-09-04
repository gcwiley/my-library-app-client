// Angular Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // used for both type of Forms
import { HttpClientModule } from '@angular/common/http';

// sets up firebase
import { AngularFireModule } from '@angular/fire/compat';

// load env variables - follow up
import { environment } from '../environments/environment';

// App Routing Module
import { AppRoutingModule } from './app-routing.module';

// Main App Component
import { AppComponent } from './app.component';
import { CookiePopupComponent } from './shared/cookie-popup/cookie-popup.component';

@NgModule({
  declarations: [AppComponent, CookiePopupComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
