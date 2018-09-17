/**
 * @module @interface IToDone
*/
import { TypeFilters } from '@App/Const';

export module IToDone {
	export interface IState {
		activeTypeFilter: TypeFilters;
		isComponentOK: boolean;
	}
}
