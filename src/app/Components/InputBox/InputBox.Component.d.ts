/**
 * @module @interface IInputBox
*/
//#region Local Imports
import { TypeFilters } from '@App/Const';
import { IToDonePropertyWithIndex } from '@App/Interfaces';
//#region Local Imports

export module IInputBox {
	export interface IState {
		editingItem?: IToDonePropertyWithIndex;
	}
}
