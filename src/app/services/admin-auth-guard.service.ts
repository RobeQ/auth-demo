import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private router: Router, private authservice: AuthService) { }

  canActivate() {
    let user = this.authservice.currentUser;

    if (user && user.admin)
      return true;

    this.router.navigate(['no-access']);
    return false;
  }
}
