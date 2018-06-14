
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import { HttpHeaders,HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs';


@Injectable()

export class AppService {
	url:string = 'http://localhost:5002/';
	// url: string = 'http://jsonplaceholder.typicode.com/posts';

	constructor(private _httpClient: HttpClient) {}

	downloadFile(filename:string):Observable<Blob> {
		var body = {filename:filename};
		let headers = new HttpHeaders({'Content-Type' : 'application/json'});
		return this._httpClient.post(this.url + 'download', body, {headers : headers, responseType : 'blob'});
	}

	downloadMultiple(filesnames:Array<any>):Observable<Blob> {
		var body = {filesnames:filesnames};
		let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
		return this._httpClient.post(this.url + 'downloadMultipleInZip', body, { headers: headers, responseType: 'blob' });
	}
	getDataPost() {
		return this._httpClient.get(this.url, null);
	}

	createPost() {
		let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
		return this._httpClient.post(this.url, null, { headers: headers});
	}
}