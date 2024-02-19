import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // used for both type of Forms
import { RouterModule } from '@angular/router';

// import angular material
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// import the book service
import { BookService } from '../../services/book.service';

// import the book interface
import { Book } from '../../types/book.interface';

@Component({
  selector: 'app-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class BookGridComponent implements OnInit {
  // create member varibles
  books: Book[] = [];

  // set up the grid list demensions
  cols = 4; // Amount of columns in the grid list.
  rowHeight = '1:1'; // row height
  gutterSize = '0px';

  // set up the grid list dimensions
  colspan = 1; // comment
  rowspan = 1; // comment

  constructor(
    private bookService: BookService,
    private breakpointObserver: BreakpointObserver
  ) {}

  // responsive code
  layoutChanges(): void {
    this.breakpointObserver
      .observe([
        Breakpoints.TabletPortrait,
        Breakpoints.TabletLandscape,
        Breakpoints.HandsetPortrait,
        Breakpoints.HandsetLandscape,
      ])
      .subscribe((result) => {
        const breakpoints = result.breakpoints;

        // check to see if viewport is in table portrait mode
        if (breakpoints[Breakpoints.TabletPortrait]) {
          this.cols = 1;
        } else if (breakpoints[Breakpoints.HandsetPortrait]) {
          this.cols = 1;
        } else if (breakpoints[Breakpoints.HandsetLandscape]) {
          this.cols = 1;
        } else if (breakpoints[Breakpoints.TabletLandscape]) {
          this.cols = 2;
        }
      });
  }

  ngOnInit(): void {
    this.getBooks();
    this.layoutChanges();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }
}
