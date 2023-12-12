import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, ActivatedRouteSnapshot,
     RouterStateSnapshot, Route, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login.service';

@Injectable()
export class LoginGuard implements CanActivate, CanLoad {
    constructor(
        private loginService: LoginService,
        private router: Router) { }

    private checkLogin(redirect: string) {
        if (!this.loginService.isLoggedIn()) {
            this.router.navigate([ '/login' ], { queryParams: { redirect: redirect } });
            return false;
        }
        return true;
    }

    canActivate(routeSnapshot: ActivatedRouteSnapshot,
        routerSnapshot: RouterStateSnapshot): Observable<boolean> | boolean {
        const redirect = encodeURI(routerSnapshot.url);
        return this.checkLogin(redirect);
    }

    canLoad(route: Route): Observable<boolean> | boolean {
        const redirect = encodeURI(route.path);
        return this.checkLogin(redirect);
    }
}

