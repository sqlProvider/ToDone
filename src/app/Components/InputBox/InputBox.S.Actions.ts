//#region Global Imports
import { Action } from '@ngrx/store';
//#endregion Global Imports

//#region Local Imports
import { Actions } from '@App/Const';
import { IToDoneProperty } from '@App/Interfaces';
//#endregion Local Imports

export class CreateNewEntry implements Action {
	public readonly type = Actions.InputBox.CreateNewEntry;
	constructor(public payload: IToDoneProperty) {}
}

export class CreateNewEntrySuccess implements Action {
	public readonly type = Actions.InputBox.CreateNewEntrySuccess;
	constructor(public payload: IToDoneProperty) {}
}

export class CreateNewEntryError implements Action {
	public readonly type = Actions.InputBox.CreateNewEntryError;
	constructor(public payload: IToDoneProperty) {}
}

export type InputBoxActions =
	CreateNewEntry;
