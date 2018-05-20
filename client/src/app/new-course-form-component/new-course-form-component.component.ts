import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-course-form-component',
  templateUrl: './new-course-form-component.component.html',
  styleUrls: ['./new-course-form-component.component.css']
})
export class NewCourseFormComponentComponent implements OnInit {
  form = new FormGroup({
    topics : new FormArray([])
  });
  constructor() { }

  ngOnInit() {}

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value= '';
  }

  removeTopic(topic:FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

}
