//#region Global Imports
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion Global Imports

//#region Local Imports
import * as ListItemActions from '@App/Components/ListItem/ListItem.S.Actions';
import { IStore, IToDoneProperty } from '@App/Interfaces';
//#endregion Local Imports

@Component({
	selector: 'app-list-item',
	styleUrls: ['./ListItem.Component.scss'],
	templateUrl: './ListItem.Component.html'
})
export class ListItemComponent implements OnInit {
	@Input() public todo: IToDoneProperty;
	@Input() public placeholder: boolean;
	@Input() public index: number;

	constructor(private store: Store<IStore>) { }

	public ngOnInit() {
	}

	public onChangeComplete() {
		this.store.dispatch(new ListItemActions.ChangeComplete({
			...this.todo,
			completed: !this.todo.completed
		}));

		this.todo.completed = !this.todo.completed;
	}

	public removeTodo() {
		this.store.dispatch(new ListItemActions.RemoveTodo({
			...this.todo,
			index: this.index
		}));
	}

	public editTodo() {
		this.store.dispatch(new ListItemActions.EditTodo({
			...this.todo,
			index: this.index
		}));
	}
}
