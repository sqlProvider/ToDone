//#region Local Imports
import { IList, IToDone } from '@App/Interfaces';
//#endregion Local Imports

export interface IStore {
	'@Store': {
		List: IList.IState,
		ToDone: IToDone.IState
	}
}
