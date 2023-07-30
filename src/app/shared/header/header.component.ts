import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AngularFireAuth } from '@angular/fire/compat/auth';

// import angular material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
})
export class HeaderComponent implements OnInit {
  isDark: boolean | undefined;

  constructor(
    public auth: AngularFireAuth,
    private router: Router,
    private overlayContainer: OverlayContainer
  ) {}

  ngOnInit(): void {
    this.isDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.setTheme();
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    this.setTheme();
  }

  setTheme(): void {
    document.documentElement.classList.toggle('dark-theme', this.isDark);
    this.overlayContainer
      .getContainerElement()
      .classList.toggle('dark-theme', this.isDark);
  }

  // signs out the current user
  onClickSignOut(): void {
    this.auth.signOut().then(() => {
      // navigates user to the sign in page
      this.router.navigateByUrl('/signin');
    });
  }
}
