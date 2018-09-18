//#region Global Imports
import { Action } from '@ngrx/store';
//#endregion Global Imports

//#region Local Imports
import { Actions, TypeFilters } from '@App/Const';
import { IToDoneProperty } from '@App/Interfaces';
//#endregion Local Imports

export class ChangeLoading implements Action {
	public readonly type = Actions.ToDone.ChangeLoading;
	constructor(public payload: boolean) { }
}

export class ChangeActiveTypeFilter implements Action {
	public readonly type = Actions.ToDone.ChangeActiveTypeFilter;
	constructor(public payload: TypeFilters) { }
}

export class FetchTodos implements Action {
	public readonly type = Actions.ToDone.FetchTodos;
	constructor(public payload?: any) { }
}

export class FetchTodosSuccess implements Action {
	public readonly type = Actions.ToDone.FetchTodosSuccess;
	constructor(public payload: Array<IToDoneProperty>) { }
}

export class FetchTodosError implements Action {
	public readonly type = Actions.ToDone.FetchTodosError;
	constructor(public payload: Object) { }
}

export type ToDoneActions =
	ChangeLoading |
	ChangeActiveTypeFilter |
	FetchTodos |
	FetchTodosSuccess |
	FetchTodosError;
