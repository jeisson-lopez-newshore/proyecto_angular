import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../authentication-guard';

@NgModule({
	imports: [ CommonModule, AuthenticationRoutingModule, ShareModule ],
	declarations: [ SignInComponent, RegisterComponent ],
	exports: [ AuthenticationRoutingModule ],
	providers: [ AuthGuard ]
})
export class AuthenticationModule {}
