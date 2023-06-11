import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-issue-header',
  templateUrl: './issue-header.component.html',
  styleUrls: ['./issue-header.component.scss'],
})
export class IssueHeaderComponent {
  @Output() sideNavToggled = new EventEmitter<void>();

  toggleSidebar() {
    // Emits an event containing a given value.
    this.sideNavToggled.emit();
  }
}
