//#region Global Imports
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
	catchError,
	map,
	switchMap
} from 'rxjs/operators';
//#endregion Global Imports

//#region Local Imports
import * as InputBoxActions from '@App/Components/InputBox/InputBox.S.Actions';
import * as ListITemActions from '@App/Components/ListItem/ListItem.S.Actions';
import * as ToDoneActions from '@App/Components/ToDone/ToDone.S.Actions';
import * as Const from '@App/Const';
import { ToDoneService } from '@App/Services';
//#endregion Local Imports

@Injectable()
export class ToDoneEffects {
	constructor(
		private actions: Actions,
		private toDoneService: ToDoneService,
	) { }

	@Effect()
	public FetchTodos = this.actions.pipe(
		map(action => action),
		ofType(Const.Actions.ToDone.FetchTodos),
		switchMap(() => this.toDoneService.FetchTodos().pipe(
			map((payload) => new ToDoneActions.FetchTodosSuccess(payload)),
			catchError((payload) => of(new ToDoneActions.FetchTodosError(payload)))
		))
	);

	@Effect()
	public CreateNewEntry = this.actions.pipe(
		map(action => action),
		ofType(Const.Actions.InputBox.CreateNewEntry),
		switchMap((action) => {
			return this.toDoneService.CreateNewEntry((<InputBoxActions.CreateNewEntry>action).payload).pipe(
				map((payload) => new InputBoxActions.CreateNewEntrySuccess(payload)),
				catchError((payload) => of(new InputBoxActions.CreateNewEntryError(payload)))
			);
		})
	);

	@Effect()
	public ChangeComplete = this.actions.pipe(
		map(action => action),
		ofType(Const.Actions.ListItem.ChangeComplete),
		switchMap((action) => {
			return this.toDoneService.ChangeComplete((<ListITemActions.ChangeComplete>action).payload).pipe(
				map((payload) => new ListITemActions.ChangeCompleteSuccess(payload)),
				catchError((payload) => of(new ListITemActions.ChangeCompleteError(payload)))
			);
		})
	);

	@Effect()
	public RemoveTodo = this.actions.pipe(
		map(action => action),
		ofType(Const.Actions.ListItem.RemoveTodo),
		switchMap((action) => {
			return this.toDoneService.RemoveTodo((<ListITemActions.RemoveTodo>action).payload).pipe(
				map(() => new ListITemActions.RemoveTodoSuccess()),
				catchError(() => of(new ListITemActions.RemoveTodoError()))
			);
		})
	);

	@Effect()
	public EditTodo = this.actions.pipe(
		map(action => action),
		ofType(Const.Actions.InputBox.EditEntry),
		switchMap((action) => {
			return this.toDoneService.EditTodo((<InputBoxActions.EditEntry>action).payload).pipe(
				map((payload) => new InputBoxActions.EditEntrySuccess(payload)),
				catchError(() => of(new InputBoxActions.EditEntryError()))
			);
		})
	);
}
