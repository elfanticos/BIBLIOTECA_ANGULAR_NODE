import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { saveAs } from 'file-saver';
import { Observable} from 'rxjs';
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [AppService]
})
export class HomeComponent {
    title = 'app';

    constructor(private _appService: AppService) { 
        this.prueba();
    }

    download() {
        var filename = 'prueba.txt';
        this._appService.downloadFile(filename).subscribe(
            result => saveAs(result, filename),
            error => console.log(<any>error)
        );
    }

    downloadMultiple() {
        var filesnames = ['prueba1.txt','prueba2.txt'];
        // var filesnames = ['prueba1.txt'];
        this._appService.downloadMultiple(filesnames).subscribe(
            result => {
                saveAs(result, (filesnames.length > 1 ? 'archivos.zip' : filesnames[0]));
            },
            error => console.log(<any>error)
        );

    }
    prueba() {
    }
}