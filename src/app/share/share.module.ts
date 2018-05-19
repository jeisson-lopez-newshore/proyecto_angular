import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/angularInmemoryData/in-memory-data.service';
import { DataBaseAdministratorService } from './services/dataBase/data-base-administrator.service';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
	],
	declarations: [],
	providers: [ DataBaseAdministratorService ]
})
export class ShareModule {}
