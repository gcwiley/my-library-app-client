import { Component, OnInit } from '@angular/core';

// Import Book Service
import { BookService } from '../book.service';

// Import Book Type
import { Book } from '../../types/book';

@Component({
  selector: 'app-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.css'],
})
export class BookGridComponent implements OnInit {
  isLoadingBooks: boolean = true;
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
      this.isLoadingBooks = false;
    });
  }
}
