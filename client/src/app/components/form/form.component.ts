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
    monto:any = null;
    form = new FormGroup({
        account : new FormGroup({
            username: new FormControl('', Validators.required),
            password: new FormControl('')
        })
    });
    monto1 = new FormControl('', Validators.required);
    /**CON VALIDACIONES SINCRONAS Y ASINCRONAS */
    // form = new FormGroup({
    //     account: new FormGroup({
    //         username: new FormControl('',
    //             [Validators.required,
    //             Validators.minLength(3),
    //             UsernameValidators.cannotContainSpace],
    //             UsernameValidators.shouldBeUnique),
    //         password: new FormControl('', Validators.required)
    //     })
    // });

    constructor() {
        
     }

    login() {
        this.form.setErrors({
            invalidLogin: true
        });
    }

    get username() {
        return this.form.get('account.username');
    }

    prueba(control) {
        console.log(control);
    }

    prueba2() {
        console.log(this.monto1);
    }


}