//#region Global Imports

//#endregion Global Imports

//#region Local Imports
import { InputBoxActions } from '@App/Components/InputBox/InputBox.S.Actions';
import { Actions } from '@App/Const';
import { IInputBox } from '@App/Interfaces';
//#endregion Local Imports

const InitialState: IInputBox.IState = {};

export const InputBoxReducer = (state: IInputBox.IState = InitialState, action: InputBoxActions): IInputBox.IState => {
	switch (action.type) {

		default:
			return state;
	}
};
