import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// import the angular material modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// import the book service
import { BookService } from 'src/app/services/book.service';

// import the book interface
import { Book } from 'src/app/types/book.interface';

@Component({
   selector: 'app-book-search',
   templateUrl: './book-search.component.html',
   styleUrls: ['./book-search.component.scss'],
   standalone: true,
   imports: [RouterModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
})
export class BookSearchComponent {
   // FIX THIS!
}
