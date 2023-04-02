import { Component, Input } from '@angular/core';

// imput the book type
import { Book } from 'src/app/types/book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Input() book!: Book;
}
