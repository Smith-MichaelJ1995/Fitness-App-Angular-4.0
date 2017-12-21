import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user-service/user.service';
import { RouterModule, Router } from '@angular/router';


@Injectable()
export class AuthguardGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    
    if (!this.userService.isLoggedIn) {
      this.router.navigate(['']);
      return false;
    }
    
    return this.userService.isLoggedIn;
  }

}
