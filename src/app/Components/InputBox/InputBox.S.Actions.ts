//#region Global Imports
import { Action } from '@ngrx/store';
//#endregion Global Imports

//#region Local Imports
import { Actions } from '@App/Const';
//#endregion Local Imports

export class CreateNewEntry implements Action {
	public readonly type = Actions.InputBox.CreateNewEntry;
	constructor(public payload: string) {}
}

export type InputBoxActions =
	CreateNewEntry;
