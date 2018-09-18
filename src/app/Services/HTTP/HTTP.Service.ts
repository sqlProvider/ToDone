//#region Global Imports
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//#endregion Global Imports

@Injectable({
	providedIn: 'root'
})
export class HTTPService {
	public readonly baseHref = 'https://jsonplaceholder.typicode.com/';
	constructor(
		private http: HttpClient
	) { }

	public Get<T>(url: string) {
		if (url.trim() === '')
			throw new Error('[HTTPService.Get] => \'url\' parameter must be defined.');

		return this.http.get<T>(`${this.baseHref}${url}`);
	}
}
