import { Component } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule]
})
export class BookSearchComponent {}
