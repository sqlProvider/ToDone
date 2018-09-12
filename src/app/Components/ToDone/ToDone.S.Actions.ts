//#region Global Imports
import { Action } from '@ngrx/store';
//#endregion Global Imports

//#region Local Imports
import { Const } from '@App/Const';
//#endregion Local Imports

export class ChangeLoading implements Action {
	public readonly type = Const.Actions.ToDone.ChangeLoading;
	constructor(public payload: boolean) {}
}

export type ToDoneActions =
	ChangeLoading;
