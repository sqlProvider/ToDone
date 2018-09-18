//#region Global Imports

//#endregion Global Imports

//#region Local Imports
import { ToDoneActions } from '@App/Components/ToDone/ToDone.S.Actions';
import { Actions } from '@App/Const';
import { IList } from '@App/Interfaces';
//#endregion Local Imports

const InitialState: IList.IState = {
	todos: []
};

export const ListReducer = (state: IList.IState = InitialState, action: ToDoneActions): IList.IState => {
	switch (action.type) {
		case Actions.ToDone.FetchTodosSuccess:
			return {
				...state,
				todos: action.payload
			};

		default:
			return state;
	}
};
