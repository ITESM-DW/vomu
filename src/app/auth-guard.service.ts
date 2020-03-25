import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : boolean|UrlTree|Observable<boolean|UrlTree>|Promise<boolean|UrlTree> {
        return this.authService.isAuth()
            .then(loggedIn => {
                if (loggedIn) {
                    return true;
                } else {
                    this.router.navigate(['/']);
                }
            })
    }
}