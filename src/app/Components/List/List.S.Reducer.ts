//#region Global Imports

//#endregion Global Imports

//#region Local Imports
import { ToDoneActions } from '@App/Components/ToDone/ToDone.S.Actions';
import { Actions, TypeFilters } from '@App/Const';
import { IList } from '@App/Interfaces';
//#endregion Local Imports

const InitialState: IList.IState = {
	activeFilter: TypeFilters.All,
	todos: []
};

export const ListReducer = (state: IList.IState = InitialState, action: ToDoneActions): IList.IState => {
	switch (action.type) {
		case Actions.ToDone.FetchTodosSuccess:
			return {
				...state,
				todos: action.payload
			};

		case Actions.ToDone.ChangeActiveTypeFilter:
			return {
				...state,
				activeFilter: action.payload
			};

		case Actions.InputBox.CreateNewEntry:
			return {
				...state,
				newEntryPlaceholder: action.payload
			};

		case Actions.InputBox.CreateNewEntrySuccess:
			return {
				...state,
				newEntryPlaceholder: undefined,
				todos: [action.payload].concat(state.todos)
			};

		case Actions.ListItem.RemoveTodo:
			const todos = state.todos.concat([]);
			todos.splice(action.payload.index, 1);

			return {
				...state,
				todos
			};

		default:
			return state;
	}
};
