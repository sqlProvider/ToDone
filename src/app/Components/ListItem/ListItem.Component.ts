//#region Global Imports
import { Component, Input, OnInit } from '@angular/core';
//#endregion Global Imports

//#region Local Imports
//#endregion Local Imports

@Component({
	selector: 'app-list-item',
	styleUrls: ['./ListItem.Component.scss'],
	templateUrl: './ListItem.Component.html'
})
export class ListItemComponent implements OnInit {
	@Input() public todo: Object;
	@Input() public placeholder: boolean;

	constructor() { }

	public ngOnInit() {
	}

}
