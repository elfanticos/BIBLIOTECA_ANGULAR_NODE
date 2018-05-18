import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

/**Validadores */
import { UsernameValidators } from './username.validators';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent {
    title = 'app';
    form = new FormGroup({
        username : new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            UsernameValidators.cannotContainSpace
        ],
            UsernameValidators.shouldBeUnique),
        password: new FormControl('', Validators.required)
    });

    constructor() { }
    get username() {
        console.log(this.form.get('username'));
        return this.form.get('username');
    }

}