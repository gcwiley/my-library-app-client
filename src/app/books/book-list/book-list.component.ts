import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// import the angular material modules
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// import the book service
import { BookService } from 'src/app/services/book.service';

// import the book type
import { Book } from 'src/app/types/book.interface';

@Component({
   selector: 'app-book-list',
   templateUrl: './book-list.component.html',
   styleUrls: ['./book-list.component.scss'],
   standalone: true,
   imports: [
      CommonModule,
      MatRippleModule,
      MatTableModule,
      MatIconModule,
      MatButtonModule,
      MatTooltipModule,
      MatProgressSpinnerModule,
      RouterModule,
   ],
})
export class BookListComponent implements OnInit {
   // fix this later!
   isLoadingResults = true;

   // set up the data source
   dataSource = new MatTableDataSource<Book>();

   // columns to display
   columnsToDisplay = ['title', 'author', 'isbn', 'createdAt', 'editBook', 'deleteBook'];

   constructor(private bookService: BookService, private router: Router) {}

   ngOnInit(): void {
      this.getBooks();
   }

   // gets all books from the book service
   getBooks(): void {
      this.bookService.getBooks().subscribe((books) => {
         this.dataSource.data = books;
      });
   }

   // favorites a book - fix this!
   onFavoriteBook(): void {
      window.alert('You have added this book to your favorites!');
   }

   // deletes a book
   onDeleteBook(id: string): void {
      this.bookService.deleteBook(id).subscribe(() => {
         // navigates admin back to the admin page
         this.router.navigateByUrl('/books');
      });
   }
}
