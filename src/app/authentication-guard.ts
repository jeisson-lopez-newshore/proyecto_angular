import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private authenticationService: AuthenticationService) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		console.log(
			'¡Authentication Guard! user authenticated: ' +
				this.authenticationService.isUserAuthenticated()
		);
		// return this.authenticationService.isUserAuthenticated();
		return true;
	}
}
