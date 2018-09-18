//#region Global Imports
import { TestBed } from '@angular/core/testing';
//#endregion Global Imports

//#region Local Imports
import { ToDoneService } from '@App/Services/ToDone/ToDone.Service';
//#region Local Imports

describe('ToDoneService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: ToDoneService = TestBed.get(ToDoneService);
		expect(service).toBeTruthy();
	});
});
