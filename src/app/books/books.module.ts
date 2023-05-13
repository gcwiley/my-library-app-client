import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // forms
import { RouterModule } from '@angular/router';

// import the material module
import { MaterialModule } from '../material.module';

// import pipes here
import { PipesModule } from '../pipes/pipe.module';

// Book Components
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookGridComponent } from './book-grid/book-grid.component';
import { BookCardComponent } from './book-card/book-card.component';
import { RecentBooksComponent } from './recent-books/recent-books.component';
import { BookSearchComponent } from './book-search/book-search.component';
// add new book components here

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    PipesModule,
  ],
  declarations: [
    BookDetailsComponent,
    BookFormComponent,
    BookGridComponent,
    BookCardComponent,
    RecentBooksComponent,
    BookSearchComponent,
  ],
  exports: [
    BookDetailsComponent,
    BookFormComponent,
    BookGridComponent,
    BookCardComponent,
    RecentBooksComponent,
    BookSearchComponent,
  ],
})
export class BooksComponentsModule {}
