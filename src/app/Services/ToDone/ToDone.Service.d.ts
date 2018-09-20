//#region Global Imports
import { Observable } from 'rxjs';
//#endregion Global Imports

//#region Local Imports
import { IToDoneProperty, IToDonePropertyWithIndex } from '@App/Interfaces';
//#endregion Local Imports

/**
 * @module @interface IToDoneService
 */
export module IToDoneService {
	export interface IFetchTodosResponse extends Array<IToDoneProperty> {}
	export interface ICreateNewEntryResponse extends IToDoneProperty {}
	export interface IChangeCompleteResponse extends IToDoneProperty {}
	export interface IRemoveTodoResponse {}
	export interface IEditTodoResponse extends IToDonePropertyWithIndex {}
}
