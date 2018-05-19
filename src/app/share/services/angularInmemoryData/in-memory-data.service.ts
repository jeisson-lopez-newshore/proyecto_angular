import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
	constructor() {}

	createDb() {
		const employees = [
			{
				id: 1,
				name: 'jeisson lopez',
				company: 'todo1',
				age: '35',
				birthDay: '29/08/1982',
				favoriteColor: 'orange',
				rolId: '1',
				projectId: '0'
			},
			{
				id: 2,
				name: 'juan',
				company: 'yuxi',
				age: 'unkonow',
				birthDay: 'unknown',
				favoriteColor: 'blue',
				rolId: '1',
				projectId: '0'
			}
		];

		const projects = [
			{ id: 1, name: 'bootCamp', teamSize: '0', clientName: 'todo1' },
			{ id: 2, name: 'Instructor', teamSize: '0', clientName: 'yuxi' }
		];

		const roles = [ { id: 1, name: 'administrator' }, { id: 2, name: 'user' } ];

		return { employees, projects, roles };
	}
}
