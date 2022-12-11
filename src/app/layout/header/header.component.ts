import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'My Library App';

  constructor(public auth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {}

  onClickSignOut(): void {
    this.auth.signOut().then(() => this.router.navigateByUrl('/signin'));
  }
}
