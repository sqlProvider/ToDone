//#region Global Imports
import { Component, OnInit } from '@angular/core';
//#endregion Global Imports

//#region Local Imports
import * as ToDoneActions from '@App/Components/ToDone/ToDone.S.Actions';
import { IStore, IToDone } from '@App/Interfaces';
//#endregion Local Imports
@Component({
	selector: 'app-input-box',
	styleUrls: ['./InputBox.Component.scss'],
	templateUrl: './InputBox.Component.html'
})
export class InputBoxComponent implements OnInit {

	constructor() { }

	public ngOnInit() {
	}

}
