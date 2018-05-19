import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../angularInmemoryData/in-memory-data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DataBaseAdministratorService {
	constructor(private client: HttpClient) {}

	public getEntities(collectionName: string): Observable<{}> {
		return this.client.get('api/' + collectionName);
	}

	// Implementar la lógica genérica para el acceso a datos.
}
