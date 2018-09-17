//#region Global Imports

//#endregion Global Imports

//#region Local Imports
import { ToDoneActions } from '@App/Components/ToDone/ToDone.S.Actions';
import { Actions, TypeFilters } from '@App/Const';
import { IToDone } from '@App/Interfaces';
//#endregion Local Imports

const InitialState: IToDone.IState = {
	activeTypeFilter: TypeFilters.All,
	isComponentOK: false
};

export const RootReducer = (state: IToDone.IState = InitialState, action: ToDoneActions): IToDone.IState => {
	switch (action.type) {
		case Actions.ToDone.ChangeLoading:
			return {
				...state,
				isComponentOK: action.payload as boolean
			};

		case Actions.ToDone.ChangeActiveTypeFilter:
			return {
				...state,
				activeTypeFilter: action.payload as TypeFilters

			};

		default:
			return state;
	}
};
