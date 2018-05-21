import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/angularInmemoryData/in-memory-data.service';
import { DataBaseAdministratorService } from './services/dataBase/data-base-administrator.service';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
		ReactiveFormsModule,
		MatButtonModule,
		MatInputModule,
		MatFormFieldModule
	],
	declarations: [ LoginComponent, RegistrationComponent ],
	providers: [ DataBaseAdministratorService ],
	exports: [ LoginComponent, RegistrationComponent ]
})
export class ShareModule {}
