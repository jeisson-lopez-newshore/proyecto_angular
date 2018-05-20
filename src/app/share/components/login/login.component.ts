import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	constructor() {
		console.log(this.fomGroup.get('name').value);
	}

	a = '';

	fomGroup = new FormGroup({
		name: new FormControl('hola', Validators.required)
	});

	public save() {
		console.log(this.fomGroup.get('name').value);
	}

	ngOnInit() {}
}
