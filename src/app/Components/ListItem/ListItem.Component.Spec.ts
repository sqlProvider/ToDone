//#region Global Imports
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//#endregion Global Imports

//#region Local Imports
import { ListItemComponent } from '@App/Components/ListItem/ListItem.Component';
//#region Local Imports

describe('ListItemComponent', () => {
	let component: ListItemComponent;
	let fixture: ComponentFixture<ListItemComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ListItemComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ListItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
