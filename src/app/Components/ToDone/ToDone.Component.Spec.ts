//#region Global Imports
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//#endregion Global Imports

//#region Local Imports
import { ToDoneComponent } from '@App/Components/ToDone/ToDone.Component';
//#region Local Imports

describe('ToDoneComponent', () => {
	let component: ToDoneComponent;
	let fixture: ComponentFixture<ToDoneComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ToDoneComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ToDoneComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
