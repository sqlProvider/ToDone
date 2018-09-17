//#region Global Imports
import { Action } from '@ngrx/store';
//#endregion Global Imports

//#region Local Imports
import { Actions, TypeFilters } from '@App/Const';
//#endregion Local Imports

export class ChangeLoading implements Action {
	public readonly type = Actions.ToDone.ChangeLoading;
	constructor(public payload: boolean) {}
}

export class ChangeActiveTypeFilter implements Action {
	public readonly type = Actions.ToDone.ChangeActiveTypeFilter;
	constructor(public payload: TypeFilters) {}
}

export type ToDoneActions =
	ChangeLoading |
	ChangeActiveTypeFilter;
