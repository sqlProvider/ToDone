//#region Global Imports
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//#endregion Global Imports

//#region Global Imports
import { InputBoxComponent } from '@App/Components/InputBox/InputBox.Component';

//#endregion Global Imports

describe('InputBoxComponent', () => {
	let component: InputBoxComponent;
	let fixture: ComponentFixture<InputBoxComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [InputBoxComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(InputBoxComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
