//#region Global Imports
import { Action } from '@ngrx/store';
//#endregion Global Imports

//#region Local Imports
import { Actions, TypeFilters } from '@App/Const';
//#endregion Local Imports

export class ComplateChanged implements Action {
	public readonly type = Actions.ListItem.ComplateChanged;
	constructor(public payload: {id: number, complated: boolean}) { }
}

export type ListItemActions =
	ComplateChanged;
