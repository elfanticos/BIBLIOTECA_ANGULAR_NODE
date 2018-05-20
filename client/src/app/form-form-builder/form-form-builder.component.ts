import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-form-builder',
  templateUrl: './form-form-builder.component.html',
  styleUrls: ['./form-form-builder.component.css']
})
export class FormFormBuilderComponent implements OnInit {
  form:any;

  constructor(fb:FormBuilder) {
    this.form = fb.group({
      name : ['', Validators.required],
      contact: fb.group({
        email : [],
        phone : []
      }),
      topics:fb.array([])
    });
  }

  ngOnInit() {
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }
}