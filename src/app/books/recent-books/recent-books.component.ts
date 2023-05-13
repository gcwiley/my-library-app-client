import { Component, OnInit } from '@angular/core';

// import the book service
import { BookService } from 'src/app/services/book.service';

// import the book interface
import { Book } from 'src/app/types/book.interface';

@Component({
  selector: 'app-recent-books',
  templateUrl: './recent-books.component.html',
  styleUrls: ['./recent-books.component.scss'],
})
export class RecentBooksComponent implements OnInit {
  recentBooks!: Book[];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getRecentBooks();
  }

  getRecentBooks(): void {
    this.bookService
      .getRecentBooks()
      .subscribe((recentBooks) => (this.recentBooks = recentBooks));
  }
}
