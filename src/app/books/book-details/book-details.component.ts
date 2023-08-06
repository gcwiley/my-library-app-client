import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

// import angular material modules
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

// import the book interface
import { Book } from '../../types/book.interface';

// import the book service
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
  standalone: true,
  imports: [CommonModule, MatListModule, MatCardModule],
})
export class BookDetailsComponent implements OnInit {
  book!: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.getBook();
  }

  // Get Book by id
  getBook(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.bookService.getBook(id).subscribe((book) => (this.book = book));
  }
}
