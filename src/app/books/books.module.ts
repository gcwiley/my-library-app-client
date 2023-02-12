import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // forms
import { RouterModule } from '@angular/router';

// import material module
import { MaterialModule } from '../material-module';

// Book Components
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookGridComponent } from './book-grid/book-grid.component';
// add new book components here

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [BookDetailsComponent, BookFormComponent, BookGridComponent],
  exports: [BookDetailsComponent, BookFormComponent, BookGridComponent],
})
export class BooksModule {}
