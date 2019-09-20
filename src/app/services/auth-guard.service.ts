import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authservice: AuthService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
    if (this.authservice.isLoggedIn())
      return true;

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
