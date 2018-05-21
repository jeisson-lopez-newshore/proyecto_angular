import { LoginComponent } from './../share/components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './../authentication-guard';

const routes: Routes = [
	{
		path: '',
		children: [
			{ path: '', component: LoginComponent },
			{ path: 'register', component: RegisterComponent },
			{ path: 'signIn', component: SignInComponent, canActivate: [ AuthGuard ] }
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class AuthenticationRoutingModule {}
