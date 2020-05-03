import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseViewDetailsComponent } from './course-view-details.component';

describe('CourseViewDetailsComponent', () => {
	let component: CourseViewDetailsComponent;
	let fixture: ComponentFixture<CourseViewDetailsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CourseViewDetailsComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CourseViewDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
