import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title: string = 'My Library App';

  constructor(public auth: AngularFireAuth, private router: Router) {}

  onClickSignOut(): void {
    this.auth.signOut().then(() => this.router.navigateByUrl('/signin'));
  }
}
