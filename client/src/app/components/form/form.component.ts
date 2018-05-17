import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent {
    title = 'app';
    form = new FormGroup({
        username : new FormControl(),
        password: new FormControl()
    });

    constructor() { }


}