import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// import angular material modules
import { MatButtonModule } from '@angular/material/button';

const STORAGE_KEY = 'docs-cookies'

@Component({
  selector: 'app-cookie-popup',
  templateUrl: './cookie-popup.component.html',
  styleUrls: ['./cookie-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MatButtonModule]
})
export class CookiePopupComponent {
  /** Whether the user has accepted the cookie disclaimer. */
  hasAccepted: boolean;

  constructor() {
    // Needs to be in a try/catch, because some browsers will
    // throw when using `localStorage` in private mode.
    try {
      this.hasAccepted = localStorage.getItem(STORAGE_KEY) === 'true';
    } catch {
      this.hasAccepted = false;
    }
  }

  /** Accepts the cookie disclaimer. */
  accept() {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {}

    this.hasAccepted = true;
  }
}
