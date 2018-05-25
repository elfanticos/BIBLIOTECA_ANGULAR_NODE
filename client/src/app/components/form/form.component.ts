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
    // form = new FormGroup({
    //     account : new FormGroup({
    //         username: new FormControl('', Validators.required),
    //         password: new FormControl('')
    //     })
    // });
    monto1 = new FormControl('', Validators.required);
    /**CON VALIDACIONES SINCRONAS Y ASINCRONAS */
    form = new FormGroup({
        account: new FormGroup({
            username: new FormControl('',
                [Validators.required,
                Validators.minLength(3),
                UsernameValidators.cannotContainSpace],
                UsernameValidators.shouldBeUnique),
            password: new FormControl('', Validators.required)
        })
    });

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

    prueba(event:any) {
        // console.log(this.username);

        this.username.setErrors({ invalidLogin: true});
        this.username.markAsTouched();
        // this.username.invalid;


        // this.username.markAsDirty();
        // expect(this.username.valid).toEqual(false);
        // expect(this.username.errors).toEqual({ "notUnique": true });
        // this.username.setValue("someOtherLogin");
        // this.username.updateValueAndValidity();
        // expect(this.username.valid).toEqual(true);

    }

    prueba2() {
        console.log(this.username);
        this.username.markAsTouched();
        // this.username.invalid;
    }


}