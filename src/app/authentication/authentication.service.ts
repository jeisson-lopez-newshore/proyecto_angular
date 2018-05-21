import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../entities/User';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {
	user = 'admin';
	password = 'admin';
	isAuthenticated = false;

	constructor(private router: Router) {}

	public signIn(user: User) {
		this.isAuthenticated = this.user === user.userName && this.password === user.userPassword;
	}

	public signOut() {
		this.isAuthenticated = false;
	}

	public isUserAuthenticated(): boolean {
		return this.isAuthenticated;
	}
}
