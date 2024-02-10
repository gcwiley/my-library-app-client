import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

// import the angular material modules
import { MatGridListModule } from '@angular/material/grid-list';

// import shared components
import { HeaderComponent, FooterComponent, AnnouncementBannerComponent } from 'src/app/shared';

// import the book components
import { BookGridComponent } from 'src/app/books';

@Component({
   selector: 'app-book-grid-page',
   templateUrl: './book-grid-page.component.html',
   styleUrls: ['./book-grid-page.component.scss'],
   standalone: true,
   imports: [MatGridListModule, HeaderComponent, FooterComponent, AnnouncementBannerComponent, BookGridComponent],
})
export class BookGridPageComponent implements OnInit {
   // set the default values of the grid list here
   cols = 4; // sets the number of colums in the grid
   rowHeight = 'fit'; // sets the height of the rows in the grid
   gutterSize = '25px'; // sets the gutter size of the grid

   //  set the default values of the grid tile here
   colspan = 3;

   constructor(private breakpointObserver: BreakpointObserver) {}

   // responsive code
   layoutChanges(): void {
      this.breakpointObserver
         .observe([Breakpoints.TabletPortrait, Breakpoints.TabletLandscape, Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape])
         .subscribe((result) => {
            const breakpoints = result.breakpoints;
            // checks to see if viewport is in table portrait mode
            if (breakpoints[Breakpoints.TabletPortrait]) {
               this.cols = 1; // grid list changes to 1 column
               this.colspan = 1; // grid tile takes up 1 column
            }
         });
   }

   ngOnInit(): void {
      this.layoutChanges();
   }
}
