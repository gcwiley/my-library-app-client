import { Component } from '@angular/core';
import { Router } from '@angular/router';

// import angular material modules
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// import the book service
import { BookService } from 'src/app/services/book.service';

// import book interface
import { Book } from 'src/app/types/book.interface';

@Component({
   selector: 'app-book-action-bar',
   templateUrl: './book-action-bar.component.html',
   styleUrls: ['./book-action-bar.component.scss'],
   standalone: true,
   imports: [MatCardModule, MatIconModule, MatButtonModule],
})
export class BookActionBarComponent {
   constructor(private bookService: BookService, private rotuer: Router) {}

   onDeleteBook(id: string) {
      
   }
}
