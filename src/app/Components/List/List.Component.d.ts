//#region Local Imports
import { IToDoneProperty } from "@App/Interfaces";
import { TypeFilters } from "@App/Const";
//#region Local Imports

/**
 * @module @interface IList
*/
export module IList {
	export interface IState {
		activeFilter: TypeFilters;
		todos: Array<IToDoneProperty>;
	}
}
