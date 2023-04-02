import { Component, OnInit } from '@angular/core';

// import the book service
import { BookService } from '../../services/book.service';

// import the book type
import { Book } from '../../types/book.interface';

@Component({
  selector: 'app-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.scss'],
})
export class BookGridComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }
}
