import { Component } from '@angular/core';
import { Router } from '@angular/router';

// import angular material modules
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

// import the book service
import { BookService } from 'src/app/services/book.service';

// import book interface
import { Book } from 'src/app/types/book.interface';

@Component({
   selector: 'app-book-action-bar',
   templateUrl: './book-action-bar.component.html',
   styleUrls: ['./book-action-bar.component.scss'],
   standalone: true,
   imports: [MatCardModule, MatIconModule, MatButtonModule, MatDividerModule],
})
export class BookActionBarComponent {
   constructor(private bookService: BookService, private router: Router) {}

   // edit book by id
   onEditBook(id: string) {
      console.log('Edit Book needs work');
   }

   // deletes a book by id
   onDeleteBook(id: string) {
      this.bookService.deleteBook(id).subscribe(() => {
         // navigates user back to the 'my-library' page
         this.router.navigateByUrl('/books');
      });
   }

   // onFavoriteBook(id: string) {
   //    this.bookService.favoriteBook(id).subscribe(() => {
   //       // navigates user back to the 'my-library' page
   //       this.router.navigateByUrl('/books');
   //    });
   // }
}
