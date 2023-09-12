import { Component } from '@angular/core';

// import shared components
import { HeaderComponent, FooterComponent, AnnouncementBannerComponent } from 'src/app/shared';

@Component({
   selector: 'app-not-found-page',
   templateUrl: './not-found-page.component.html',
   styleUrls: ['./not-found-page.component.scss'],
   standalone: true,
   imports: [HeaderComponent, FooterComponent, AnnouncementBannerComponent],
})
export class NotFoundPageComponent {}
