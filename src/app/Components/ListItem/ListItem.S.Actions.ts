//#region Global Imports
import { Action } from '@ngrx/store';
//#endregion Global Imports

//#region Local Imports
import { Actions } from '@App/Const';
import { IToDoneProperty, IToDonePropertyWithIndex } from '@App/Interfaces';
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

export class RemoveTodo implements Action {
	public readonly type = Actions.ListItem.RemoveTodo;
	constructor(public payload: IToDonePropertyWithIndex) { }
}

export class RemoveTodoSuccess implements Action {
	public readonly type = Actions.ListItem.RemoveTodoSuccess;
	constructor() { }
}

export class RemoveTodoError implements Action {
	public readonly type = Actions.ListItem.RemoveTodoError;
	constructor() { }
}

export type ListItemActions =
	ChangeComplete |
	ChangeCompleteSuccess |
	ChangeCompleteError |
	RemoveTodo |
	RemoveTodoSuccess |
	RemoveTodoError;
