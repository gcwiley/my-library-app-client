import { Component } from '@angular/core';

// import angular material modules
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

// import shared components
import {
  HeaderComponent,
  FooterComponent,
  AnnouncementBannerComponent,
  HeroComponent,
} from 'src/app/shared';

// import the book components
import { BookGridComponent, BookSearchComponent, BookCarouselComponent } from 'src/app/books';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  standalone: true,
  imports: [
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    HeaderComponent,
    FooterComponent,
    AnnouncementBannerComponent,
    HeroComponent,
    BookGridComponent,
    BookSearchComponent,
    BookCarouselComponent,
  ],
})
export class MainPageComponent {}
