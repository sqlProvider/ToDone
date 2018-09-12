
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-tool-box',
	styleUrls: ['./ToolBox.Component.scss'],
	templateUrl: './ToolBox.Component.html'
})
export class ToolBoxComponent implements OnInit {
	public isToolBoxFocused = false;
	constructor() { }

	public ngOnInit() {
	}

	public onToolBoxFocus() {
		this.isToolBoxFocused = true;
	}

	public onToolBoxBlur() {
		this.isToolBoxFocused = false;
	}

}
