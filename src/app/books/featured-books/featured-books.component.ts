import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';

// import angular material modules
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

// import simple truncate pipe
import { SimpleTruncatePipe } from 'src/app/pipes/simple-truncate.pipe';

// import the book service
import { BookService } from 'src/app/services/book.service';

// import the book interface
import { Book } from 'src/app/types/book.interface';

@Component({
   selector: 'app-featured-books',
   templateUrl: './featured-books.component.html',
   styleUrls: ['./featured-books.component.scss'],
   standalone: true,
   imports: [
      CommonModule,
      RouterModule,
      MatGridListModule,
      MatCardModule,
      MatIconModule,
      MatButtonModule,
      MatDividerModule,
      SimpleTruncatePipe,
   ],
})
export class FeaturedBooksComponent implements OnInit {
   // create member variables
   recentBooks: Book[] = [];

   // set up the grid list demensions
   cols = 6; // Amount of columns in the grid list.
   rowHeight = '200px'; // row height
   gutterSize = '20px';

   // set up the grid list dimensions
   colspan = 1; // comment
   rowspan = 1; // comment

   constructor(private bookService: BookService, private breakpointObserver: BreakpointObserver) {}

   // responsive code
   layoutChanges(): void {
      this.breakpointObserver
         .observe([Breakpoints.TabletPortrait, Breakpoints.TabletLandscape, Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape])
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
      this.getRecentlyCreatedBooks();
      this.layoutChanges();
   }

   getRecentlyCreatedBooks(): void {
      this.bookService.getRecentBooks().subscribe((recentBooks) => {
         this.recentBooks = recentBooks;
      });
   }
}
