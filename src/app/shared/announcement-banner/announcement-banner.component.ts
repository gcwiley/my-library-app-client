import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

// import angular material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-announcement-banner',
  templateUrl: './announcement-banner.component.html',
  styleUrls: ['./announcement-banner.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule],
})
export class AnnouncementBannerComponent {
  text = 'This web application is currently in development.';

  constructor(public auth: AngularFireAuth) {}
}
