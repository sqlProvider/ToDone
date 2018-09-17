//#region Global Imports
import { Component, OnInit } from '@angular/core';
//#endregion Global Imports

//#region Local Imports
//#endregion Local Imports

@Component({
	selector: 'app-list-item',
	styleUrls: ['./ListItem.Component.scss'],
	templateUrl: './ListItem.Component.html'
})
export class ListItemComponent implements OnInit {
	public rng: boolean;
	constructor() { }

	public ngOnInit() {
		console.log(Math.random());
		this.rng = Math.random() > 0.5 ? false : true;
	}

}
