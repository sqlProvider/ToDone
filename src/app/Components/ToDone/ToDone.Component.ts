//#region Global Imports
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
//#endregion Global Imports

//#region Local Imports
import * as ToDoneActions from '@App/Components/ToDone/ToDone.S.Actions';
import { TypeFilters } from '@App/Const';
import { IStore, IToDone } from '@App/Interfaces';
//#endregion Local Imports

@Component({
	selector: 'app-to-done',
	styleUrls: ['./ToDone.Component.scss'],
	templateUrl: './ToDone.Component.html',
})
export class ToDoneComponent implements AfterViewInit, OnInit {
	public state: Observable<IToDone.IState>;
	public TypeFilters = TypeFilters;

	constructor(
		private store: Store<IStore>
	) { }

	public ngOnInit() {
		this.state = this.store.select('@Store', 'ToDone');
	}

	public ngAfterViewInit() {
		/**
		 * Angular get 'ExpressionChangedAfterItHasBeenCheckedError' error when expression has changed after it was checked.
		 * Wraped dispatch in setTimeout for solution.
		 */
		setTimeout(() => {
			this.store.dispatch(new ToDoneActions.ChangeLoading(true));
		}, 0);
	}

	public applyTypeFilter(filter: TypeFilters) {
		this.store.dispatch(new ToDoneActions.ChangeActiveTypeFilter(filter));
	}
}
