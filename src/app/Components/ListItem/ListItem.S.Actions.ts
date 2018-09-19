//#region Global Imports
import { Action } from '@ngrx/store';
//#endregion Global Imports

//#region Local Imports
import { Actions } from '@App/Const';
import { IToDoneProperty } from '@App/Interfaces';
//#endregion Local Imports

export class ChangeComplete implements Action {
	public readonly type = Actions.ListItem.ChangeComplete;
	constructor(public payload: IToDoneProperty) { }
}

export class ChangeCompleteSuccess implements Action {
	public readonly type = Actions.ListItem.ChangeCompleteSuccess;
	constructor(public payload: IToDoneProperty) { }
}

export class ChangeCompleteError implements Action {
	public readonly type = Actions.ListItem.ChangeCompleteError;
	constructor(public payload: IToDoneProperty) { }
}

export type ListItemActions =
	ChangeComplete |
	ChangeCompleteSuccess |
	ChangeCompleteError;
