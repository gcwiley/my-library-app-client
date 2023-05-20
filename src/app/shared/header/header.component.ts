import { Component } from '@angular/core';
import { Router } from '@angular/router';

// import the auth service
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public auth: AuthService, private router: Router) {}

  onClickSignOut(): void {
    this.auth.signOut().then(() => this.router.navigateByUrl('/signin'));
  }
}
