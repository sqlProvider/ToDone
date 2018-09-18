//#region Global Imports
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
//#endregion Global Imports

//#region Local Imports
import { IList, IStore } from '@App/Interfaces';
//#endregion Local Imports

@Component({
	selector: 'app-list',
	styleUrls: ['./List.Component.scss'],
	templateUrl: './List.Component.html',
})
export class ListComponent implements OnInit {
	public state: Observable<IList.IState>;

	constructor(
		private store: Store<IStore>
	) { }

	public ngOnInit() {
		this.state = this.store.select('@Store', 'List');
	}

}
