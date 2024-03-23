import { Component } from '@angular/core';

// import the angular material modules
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';

// import the shared components
import { HeaderComponent, FooterComponent, AnnouncementBannerComponent } from 'src/app/shared';

// import the book components
import { BookGridComponent } from 'src/app/books';

@Component({
   selector: 'app-book-grid-page',
   templateUrl: './book-grid-page.component.html',
   styleUrls: ['./book-grid-page.component.scss'],
   standalone: true,
   imports: [MatGridListModule, MatDividerModule, HeaderComponent, FooterComponent, AnnouncementBannerComponent, BookGridComponent],
})
export class BookGridPageComponent {}
