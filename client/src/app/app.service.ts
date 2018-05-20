import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, ResponseContentType} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


@Injectable()

export class AppService {
	// url:string = 'http://localhost:3978/';
	url: string = 'http://jsonplaceholder.typicode.com/posts';

	constructor(private _http:Http) {}

	downloadFile(filename:string):Observable<Blob> {
		var body = {filename:filename};
  		let headers = new Headers({'Content-Type' : 'application/json'});
      	let options = new RequestOptions({
          headers: headers, 
          responseType: ResponseContentType.Blob
        });
		return this._http.post(this.url+'download',body,options).map(
			(res) => {
				return <Blob>res.blob()
			}
		);
	}

	downloadMultiple(filesnames:Array<any>):Observable<Blob> {
		var body = {filesnames:filesnames};
  		let headers = new Headers({'Content-Type' : 'application/json'});
      	let options = new RequestOptions({
          headers: headers, 
          responseType: ResponseContentType.Blob
        });
		return this._http.post(this.url+'downloadMultipleInZip',body,options).map(
			(res) => {
				return <Blob>res.blob()
			}
		);
	}
	getDataPost() {
		let headers = new Headers({'Content-Type': 'application/json'});
		return this._http.get(this.url, null).map(res => res.json());
	}
}