//#region Global Imports
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//#endregion Global Imports

//#region Local Imports
import { ToolBoxComponent } from '@App/Components/ToolBox/ToolBox.Component';
//#region Local Imports

describe('ToolBoxComponent', () => {
	let component: ToolBoxComponent;
	let fixture: ComponentFixture<ToolBoxComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ToolBoxComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ToolBoxComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
