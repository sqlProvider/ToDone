//#region Global Imports
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
//#endregion Global Imports

//#region Local Imports
import * as InputBoxActions from '@App/Components/InputBox/InputBox.S.Actions';
import { IInputBox, IStore, IToDonePropertyWithIndex } from '@App/Interfaces';
//#endregion Local Imports
@Component({
	selector: 'app-input-box',
	styleUrls: ['./InputBox.Component.scss'],
	templateUrl: './InputBox.Component.html'
})
export class InputBoxComponent implements OnInit {
	public state: Observable<IInputBox.IState>;
	public entry = '';
	public entryLength = 0;
	public maxEntryLength = 50;
	public editing = false;
	public editingItem: IToDonePropertyWithIndex;

	constructor(
		private store: Store<IStore>
	) { }

	public ngOnInit() {
		this.state = this.store.select('@Store', 'InputBox');

		this.state.subscribe((state) => {
			if (state.editingItem !== undefined) {
				this.editing = true;
				this.editingItem = state.editingItem;
				this.entry = this.editingItem.title;
			}
		});
	}

	public createNewEntry() {
		if (this.entry.trim() === '') return;

		if (this.editing) {
			this.store.dispatch(new InputBoxActions.EditEntry({
				...this.editingItem,
				title: this.entry
			}));

			this.editing = false;
			this.editingItem = undefined;
		}
		else
			this.store.dispatch(new InputBoxActions.CreateNewEntry({
				completed: false,
				title: this.entry,
				userId: 1
			}));

		this.entry = '';
	}
}
