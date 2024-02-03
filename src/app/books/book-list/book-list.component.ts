import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

// import the angular material modules
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// import material data source
import { MatTableDataSource } from '@angular/material/table';

// import the book service
import { BookService } from 'src/app/services/book.service';

// import the book type
import { Book } from 'src/app/types/book.interface';

@Component({
   selector: 'app-book-list',
   templateUrl: './book-list.component.html',
   styleUrls: ['./book-list.component.scss'],
   standalone: true,
   imports: [MatTableModule, MatIconModule, MatButtonModule, RouterModule],
})
export class BookListComponent implements OnInit {
   // set up the data source
   dataSource = new MatTableDataSource<Book>();

   // columns to display
   columnsToDisplay = [
      'title',
      'author',
      'isbn',
      'pageCount',
      'genre',
      'createdAt',
      'updatedAt',
      'deleteBook',
      'favoriteBook',
      'editBook',
   ];

   constructor(private bookService: BookService, private router: Router) {}

   // this method executes right away
   ngOnInit(): void {
      this.getBooks();
   }

   // gets all projects from the project service
   getBooks(): void {
      this.bookService.getBooks().subscribe((books) => {
         this.dataSource.data = books;
      });
   }

   // favorites a book
   onFavoriteBook(): void {
      window.alert('You have added this book to favorites!');
   }

   // deletes a book
   onDeleteBook(id: string): void {
      this.bookService.deleteBook(id).subscribe(() => {
         // navigates admin back to the admin page
         this.router.navigateByUrl('/admin');
      });
   }
}
