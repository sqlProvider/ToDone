import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootComponent } from '@App/Layout/Root/Root.Component';

describe('RootComponent', () => {
	let component: RootComponent;
	let fixture: ComponentFixture<RootComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [RootComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RootComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
