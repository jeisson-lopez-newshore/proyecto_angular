import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './share/components/login/login.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{
		path: 'authentication',
		loadChildren: './authentication/authentication.module#AuthenticationModule'
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
