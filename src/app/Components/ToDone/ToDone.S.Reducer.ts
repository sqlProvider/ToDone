//#region Global Imports

//#endregion Global Imports

//#region Local Imports
import { ToDoneActions } from '@App/Components/ToDone/ToDone.S.Actions';
import { Const } from '@App/Const';
import { IToDone } from '@App/Interfaces';
//#endregion Local Imports

const InitialState: IToDone.IState = {
	isComponentOK: false
};

export const RootReducer = (state: IToDone.IState = InitialState, action: ToDoneActions): IToDone.IState => {
	switch (action.type) {
		case Const.Actions.ToDone.ChangeLoading:
			return {
				...state,
				isComponentOK: action.payload
			};

		default:
			return state;
	}
};
