import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
  isDark: boolean | undefined;

  constructor(private overlayContainer: OverlayContainer) {}

  ngOnInit(): void {
    this.isDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark').matches;
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
}
