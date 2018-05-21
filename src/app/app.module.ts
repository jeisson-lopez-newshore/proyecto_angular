import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

'./share/services/angularInmemoryData/in-memory-data.service';

import { HomeComponent } from './home/home.component';
import { ShareModule } from './share/share.module';

@NgModule({
	declarations: [ AppComponent, HomeComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ShareModule,
		RouterModule.forRoot([
			{
				path: '',
				component: HomeComponent
			},
			{
				path: 'authentication',
				loadChildren: './authentication/authentication.module#AuthenticationModule'
			}
		])
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
