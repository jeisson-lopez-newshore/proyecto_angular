import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/angularInmemoryData/in-memory-data.service';
import { DataBaseAdministratorService } from './services/dataBase/data-base-administrator.service';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatInputModule,
		MatFormFieldModule
	],
	declarations: [ LoginComponent ],
	providers: [ DataBaseAdministratorService ],
	exports: [ LoginComponent ]
})
export class ShareModule {}
