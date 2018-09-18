//#region Local Imports
import { TypeFilters } from '@App/Const';
//#region Local Imports

/**
 * @module @interface IToDone
*/
export module IToDone {
	export interface IState {
		activeTypeFilter: TypeFilters;
		isComponentOK: boolean;
	}
}
