import { Component } from '@angular/core';

// import angular material
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-announcement-banner',
  templateUrl: './announcement-banner.component.html',
  styleUrls: ['./announcement-banner.component.scss'],
  standalone: true,
  imports: [MatToolbarModule]
})
export class AnnouncementBannerComponent {
  text = 'This web application is currently in development.'
}
