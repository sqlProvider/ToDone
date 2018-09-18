//#region Global Imports
import { Injectable } from '@angular/core';
//#endregion Global Imports

//#region Local Imports
import { HTTPService } from '@App/Services/HTTP/HTTP.Service';
//#endregion Local Imports

@Injectable({
	providedIn: 'root'
})
export class ToDoneService {

	constructor(
		private httpService: HTTPService
	) { }

	public Fetch() {
		return this.httpService.Get('users/1/todos');
	}
}
