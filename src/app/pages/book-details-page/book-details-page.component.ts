import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

// import angular material modules
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

// import the shared components
import { HeaderComponent, FooterComponent, AnnouncementBannerComponent } from 'src/app/shared';

// import the book components
import {
   BookDescriptionComponent,
   BookDetailsComponent,
} from 'src/app/books';

// import the book interface
import { Book } from 'src/app/types/book.interface';

// import the book service
import { BookService } from 'src/app/services/book.service';

@Component({
   selector: 'app-book-details-page',
   templateUrl: './book-details-page.component.html',
   styleUrls: ['./book-details-page.component.scss'],
   standalone: true,
   imports: [
      MatGridListModule,
      MatCardModule,
      HeaderComponent,
      FooterComponent,
      AnnouncementBannerComponent,
      BookDescriptionComponent,
      BookDetailsComponent,
   ],
})
export class BookDetailsPageComponent implements OnInit {
   // set the default values of the grid list here
   cols = 4; // sets the number of columns in the grid
   rowHeight = 'fit'; // sets the height of the rows in the grid
   gutterSize = '25px'; // sets the gutter size of the grid

   // set the default values of the grid tile here
   colspan = 3;

   book!: Book;

   constructor(
      private breakpointObserver: BreakpointObserver
   ) {}

   // makes the page responsive
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
               this.cols = 1; // grid list changes to 1 column
               this.colspan = 1; // grid tile takes up one column
            } else if (breakpoints[Breakpoints.HandsetPortrait]) {
               this.cols = 1;
               this.colspan = 1; // grid tile takes up one column
            } else if (breakpoints[Breakpoints.HandsetLandscape]) {
               this.cols = 1;
               this.colspan = 1; // grid tile takes up one column
            } else if (breakpoints[Breakpoints.TabletLandscape]) {
               this.cols = 1;
               this.colspan = 1; // grid tile takes up one column
            }
         });
   }

   ngOnInit(): void {
      this.layoutChanges();
   }
}
