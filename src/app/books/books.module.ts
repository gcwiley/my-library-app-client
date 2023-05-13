import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // forms
import { RouterModule } from '@angular/router';

// import the material module
import { MaterialModule } from '../material.module';

// import pipes here

// Book Components
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookGridComponent } from './book-grid/book-grid.component';
import { BookCardComponent } from './book-card/book-card.component';
// add new book components here

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    BookDetailsComponent,
    BookFormComponent,
    BookGridComponent,
    BookCardComponent,
  ],
  exports: [
    BookDetailsComponent,
    BookFormComponent,
    BookGridComponent,
    BookCardComponent,
  ],
})
export class BooksComponentsModule {}
