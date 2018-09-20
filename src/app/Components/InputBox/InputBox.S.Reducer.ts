//#region Global Imports

//#endregion Global Imports

//#region Local Imports
import { InputBoxActions } from '@App/Components/InputBox/InputBox.S.Actions';
import { EditTodo as EditTodoAction, ListItemActions } from '@App/Components/ListItem/ListItem.S.Actions';
import { Actions } from '@App/Const';
import { IInputBox } from '@App/Interfaces';
//#endregion Local Imports

const InitialState: IInputBox.IState = {};

export const InputBoxReducer = (state: IInputBox.IState = InitialState, action: InputBoxActions | ListItemActions): IInputBox.IState => {
	switch (action.type) {

		case Actions.ListItem.EditTodo:
			return {
				...state,
				editingItem: (<EditTodoAction>action).payload
			};

		default:
			return state;
	}
};
