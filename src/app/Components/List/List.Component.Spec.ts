//#region Global Imports
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//#endregion Global Imports

//#region Local Imports
import { ListComponent } from '@App/Components/List/List.Component';
//#region Local Imports

describe('ListComponent', () => {
	let component: ListComponent;
	let fixture: ComponentFixture<ListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ListComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
