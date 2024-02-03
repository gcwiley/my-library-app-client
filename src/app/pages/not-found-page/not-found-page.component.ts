import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// import shared components
import { HeaderComponent, FooterComponent, AnnouncementBannerComponent } from 'src/app/shared';

@Component({
   selector: 'app-not-found-page',
   templateUrl: './not-found-page.component.html',
   styleUrls: ['./not-found-page.component.scss'],
   standalone: true,
   imports: [RouterModule, HeaderComponent, FooterComponent, AnnouncementBannerComponent],
})
export class NotFoundPageComponent {}
