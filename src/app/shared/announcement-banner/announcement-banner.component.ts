import { Component } from '@angular/core';

@Component({
   selector: 'app-announcement-banner',
   templateUrl: './announcement-banner.component.html',
   styleUrls: ['./announcement-banner.component.scss'],
   standalone: true,
   imports: [],
})
export class AnnouncementBannerComponent {
   text = 'This web application is currently in development.';
}
