import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// import angular material modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// import the book service here
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
  standalone: true,
  imports: [RouterModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
})
export class BookSearchComponent {}
