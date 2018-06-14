import { Component } from '@angular/core';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
  ) {
    // this.prueba();
  }

  prueba() {
    range(1, 200)
      .pipe(filter(x => x % 2 === 1), map(x => x * x))
      .subscribe(x => console.log(x));
  }
}