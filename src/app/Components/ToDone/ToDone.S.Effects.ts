//#region Global Imports
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
//#endregion Global Imports

//#region Local Imports
import * as ToDoneActions from '@App/Components/ToDone/ToDone.S.Actions';
import * as Const from '@App/Const';
import { ToDoneService } from '@App/Services';
//#endregion Local Imports

@Injectable()
export class ToDoneEffects {
	constructor(private actions: Actions, private toDoneService: ToDoneService) {}

	@Effect()
	public FetchTodos = this.actions.pipe(
		map(action => action),
		ofType(Const.Actions.ToDone.FetchTodos),
		switchMap(() => this.toDoneService.FetchTodos().pipe(
			map((payload) => new ToDoneActions.FetchTodosSuccess(payload)),
			catchError((payload) => of(new ToDoneActions.FetchTodosError(payload)))
		))
	);
}
