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

	public Post<T>(url: string, data: Object) {
		if (url.trim() === '')
			throw new Error('[HTTPService.Post] => \'url\' parameter must be defined.');

		return this.http.post<T>(
			`${this.baseHref}${url}`,
			JSON.stringify(data),
			{
				headers: {
					'Content-type': 'application/json; charset=UTF-8'
				}
			}
		);
	}

	public Patch<T>(url: string, data: Object) {
		if (url.trim() === '')
			throw new Error('[HTTPService.Patch] => \'url\' parameter must be defined.');

		return this.http.patch<T>(
			`${this.baseHref}${url}`,
			JSON.stringify(data),
			{
				headers: {
					'Content-type': 'application/json; charset=UTF-8'
				}
			}
		);
	}
}
