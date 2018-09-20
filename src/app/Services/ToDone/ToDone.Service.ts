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

	public Create(data: IToDoneProperty): Observable<IToDoneService.ICreateResponse> {
		return this.httpService.Post<IToDoneService.ICreateResponse>('todos', data);
	}

	public Update(data: IToDoneProperty): Observable<IToDoneService.IUpdateResponse> {
		return this.httpService.Patch<IToDoneService.IUpdateResponse>(`todos/${data.id}`, data);
	}

	public Remove(data: IToDoneProperty): Observable<IToDoneService.IRemoveResponse> {
		return this.httpService.Delete<IToDoneService.IRemoveResponse>(`todos/${data.id}`);
	}
}
