//#region Global Imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//#endregion Global Imports

//#region Local Imports
import { IToDoneProperty, IToDoneService } from '@App/Interfaces';
import { HTTPService } from '@App/Services/HTTP/HTTP.Service';
//#endregion Local Imports

@Injectable({
	providedIn: 'root'
})
export class ToDoneService {

	constructor(
		private httpService: HTTPService
	) { }

	public FetchTodos(): Observable<IToDoneService.IFetchTodosResponse> {
		return this.httpService.Get<IToDoneService.IFetchTodosResponse>('users/1/todos');
	}

	public CreateNewEntry(data: IToDoneProperty): Observable<IToDoneService.ICreateNewEntryResponse> {
		return this.httpService.Post<IToDoneService.ICreateNewEntryResponse>('todos', data);
	}
}
