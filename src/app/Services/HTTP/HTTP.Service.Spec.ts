//#region Global Imports
import { TestBed } from '@angular/core/testing';
//#endregion Global Imports

//#region Local Imports
import { HTTPService } from '@App/Services/HTTP/HTTP.Service';
//#region Local Imports

describe('HTTPService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: HTTPService = TestBed.get(HTTPService);
		expect(service).toBeTruthy();
	});
});
