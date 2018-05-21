import { DataBaseAdministratorService } from './share/services/dataBase/data-base-administrator.service';
import { Component } from '@angular/core';
import { Employee } from './entities/Employee';
import { Project } from './entities/Project';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './authentication/authentication.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	constructor(
		client: DataBaseAdministratorService,
		private authenticationService: AuthenticationService,
		private router: Router,
		private route: ActivatedRoute
	) {
		client.getEntities('employees').subscribe(console.log);
		client.getEntities('projects').subscribe(console.log);
		client.getEntities('roles').subscribe(console.log);
	}

	public userLogin() {
		console.log('entro');
		this.router.navigateByUrl('authentication/signIn');
	}
}
