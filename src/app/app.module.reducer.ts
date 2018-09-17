//#region Global Imports
import { InjectionToken } from '@angular/core';
import { ActionReducerMap, combineReducers } from '@ngrx/store';
//#endregion Global Imports

//#region Local Imports
import { InputBoxReducer } from '@App/Components/InputBox/InputBox.S.Reducer';
import { ToDoneReducer } from '@App/Components/ToDone/ToDone.S.Reducer';
import { IStore } from '@App/Interfaces';
//#endregion Local Imports

export module ToDoneStore {
	export const Reducers = combineReducers({
		InputBox: InputBoxReducer,
		ToDone: ToDoneReducer
	});

	export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<IStore>>('Reducers');

	export const GetReducers = () => {
		return {
			'@Store': Reducers,
		};
	};

	export const ReducerProvider = [
		{ provide: REDUCER_TOKEN, useFactory: GetReducers }
	];
}
