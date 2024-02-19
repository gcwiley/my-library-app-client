import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

// import the angular material modules
import { MatGridListModule } from '@angular/material/grid-list';

// import the shared components
import { HeaderComponent, FooterComponent, AnnouncementBannerComponent, HeroComponent } from 'src/app/shared';

// import the book components
import { BookCarouselComponent } from 'src/app/books';

@Component({
   selector: 'app-main-page',
   templateUrl: './main-page.component.html',
   styleUrls: ['./main-page.component.scss'],
   standalone: true,
   imports: [MatGridListModule, HeaderComponent, FooterComponent, AnnouncementBannerComponent, HeroComponent, BookCarouselComponent],
})
export class MainPageComponent implements OnInit {
   // set the default values of the grid list here
   cols = 4; // sets the number of columns in the grid
   rowHeight = 'fit'; // sets the height of the rows in the grid
   gutterSize = '0px'; // sets the gutter size of the grid

   // set the default values of the grid tile here
   colspan = 3;

   constructor(private breakpointObserver: BreakpointObserver) {}

   //  responsive code
   layoutChanges(): void {
      this.breakpointObserver
         .observe([Breakpoints.TabletPortrait, Breakpoints.TabletLandscape, Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape])
         .subscribe((result) => {
            const breakpoints = result.breakpoints;
            // check to see if viewport is in table portrait mode
            if (breakpoints[Breakpoints.TabletPortrait]) {
               this.cols = 1;
               this.colspan = 1;
            }
         });
   }

   ngOnInit(): void {
      this.layoutChanges();
   }
}
