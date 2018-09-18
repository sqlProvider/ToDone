//#region Local Imports
import { IToDoneProperty } from "@App/Interfaces";
//#region Local Imports

/**
 * @module @interface IList
*/
export module IList {
	export interface IState {
		todos: Array<IToDoneProperty>;
	}
}
