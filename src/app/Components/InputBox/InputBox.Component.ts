//#region Global Imports
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
//#endregion Global Imports

//#region Local Imports
import * as InputBoxActions from '@App/Components/InputBox/InputBox.S.Actions';
import { IInputBox, IStore } from '@App/Interfaces';
//#endregion Local Imports
@Component({
	selector: 'app-input-box',
	styleUrls: ['./InputBox.Component.scss'],
	templateUrl: './InputBox.Component.html'
})
export class InputBoxComponent implements OnInit {
	public state: Observable<IInputBox.IState>;
	public entry: string;
	public entryLength = 0;
	public maxEntryLength = 50;

	constructor(
		private store: Store<IStore>
	) { }

	public ngOnInit() {
		this.state = this.store.select('@Store', 'InputBox');
	}

	public createNewEntry() {
		console.log(this.entry);

		this.store.dispatch(new InputBoxActions.CreateNewEntry(this.entry));
	}

	public onChangeEntry(event: KeyboardEvent) {
		const target = event.target as HTMLInputElement;
		const value = target.value;
		this.entryLength = value.length;

		console.log(target.value, this.entryLength);
	}
}
