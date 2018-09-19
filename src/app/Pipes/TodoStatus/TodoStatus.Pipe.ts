//#region Global Imports
import { Pipe, PipeTransform } from '@angular/core';
//#endregion Global Imports

//#region Local Imports
import { TypeFilters } from '@App/Const';
import { IToDoneProperty } from '@App/Interfaces';
//#region Local Imports

@Pipe({
	name: 'todoStatus'
})
export class TodoStatusPipe implements PipeTransform {

	public transform(items: Array<IToDoneProperty>, status: TypeFilters): any {
		switch (status) {
			case TypeFilters.Completed:
				return items.filter(item => item.completed);

			case TypeFilters.Active:
				return items.filter(item => !item.completed);

			default:
				return items;
		}
	}

}
