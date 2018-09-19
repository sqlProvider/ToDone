//#region Global Imports
import { Observable } from 'rxjs';
//#endregion Global Imports

//#region Local Imports
import { IToDoneProperty } from '@App/Interfaces';
//#endregion Local Imports

/**
 * @module @interface IToDoneService
 */
export module IToDoneService {
	export interface IFetchTodosResponse extends Array<IToDoneProperty> {}
	export interface ICreateNewEntryResponse extends IToDoneProperty {}
}
