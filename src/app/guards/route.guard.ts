import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RouteGuard  {
  constructor(private auth: AngularFireAuth, private router: Router) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // check to see if user is logged in
    return this.auth.user.pipe(
      map((user) => {
        if (user) {
          return true;
        }

        // if not authenicated, send user back to the sign-in page
        this.router.navigateByUrl('/signin');
        return false;
      })
    );
  }
}
