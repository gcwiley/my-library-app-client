import { Component } from '@angular/core';

// import shared components
import {
  HeaderComponent,
  FooterComponent,
  AnnouncementBannerComponent,
  HeroComponent,
} from 'src/app/shared';

// import the book grid
import { BookGridComponent } from 'src/app/books';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    AnnouncementBannerComponent,
    HeroComponent,
    BookGridComponent,
  ],
})
export class MainPageComponent {}
