import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: [ './registration.component.css' ]
})
export class RegistrationComponent implements OnInit {
	constructor() {
		console.log(this.fomGroup.get('name').value);
	}

	email = '';

	fomGroup = new FormGroup({
		name: new FormControl('hola', Validators.required),
		email: new FormControl('email', Validators.required)
	});

	public registerUser() {
		console.log(this.fomGroup.get('name').value);
	}

	ngOnInit() {}
}
