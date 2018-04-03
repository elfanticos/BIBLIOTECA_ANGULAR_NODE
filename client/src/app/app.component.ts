import { Component } from '@angular/core';
import { AppService} from './app.service';
import {saveAs}      from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [AppService]
})
export class AppComponent {
  title = 'app';

  constructor(private _appService: AppService) {}

  download() {
  		var filename = 'prueba.txt';
    	this._appService.downloadFile(filename).subscribe(
			result => saveAs(result, filename),
			error => console.log(<any>error)
		);
    }
}