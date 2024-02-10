import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

// import angular material modules
import { MatCardModule } from '@angular/material/card';

// import the book interface
import { Book } from 'src/app/types/book.interface';

// import the book service
import { BookService } from 'src/app/services/book.service';

@Component({
   selector: 'app-book-description',
   templateUrl: './book-description.component.html',
   styleUrls: ['./book-description.component.scss'],
   standalone: true,
   imports: [CommonModule, MatCardModule],
})
export class BookDescriptionComponent implements OnInit {
   book!: Book;

   constructor(private route: ActivatedRoute, private bookService: BookService) {}

   ngOnInit(): void {
      this.getBook();
   }

   // GET book by id
   getBook(): void {
      const id = this.route.snapshot.paramMap.get('id')!;
      this.bookService.getBook(id).subscribe((book) => (this.book = book));
   }
}
