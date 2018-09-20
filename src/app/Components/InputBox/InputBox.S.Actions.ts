//#region Global Imports
import { Action } from '@ngrx/store';
//#endregion Global Imports

//#region Local Imports
import { Actions } from '@App/Const';
import { IToDoneProperty, IToDonePropertyWithIndex } from '@App/Interfaces';
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

export class EditEntry implements Action {
	public readonly type = Actions.InputBox.EditEntry;
	constructor(public payload: IToDonePropertyWithIndex) {}
}

export class EditEntrySuccess implements Action {
	public readonly type = Actions.InputBox.EditEntrySuccess;
	constructor(public payload: IToDonePropertyWithIndex) {}
}

export class EditEntryError implements Action {
	public readonly type = Actions.InputBox.EditEntryError;
	constructor() {}
}

export type InputBoxActions =
	CreateNewEntry |
	CreateNewEntrySuccess |
	CreateNewEntryError |
	EditEntry |
	EditEntrySuccess |
	EditEntryError;
