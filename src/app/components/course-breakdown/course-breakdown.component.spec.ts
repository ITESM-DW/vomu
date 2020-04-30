import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseBreakdownComponent } from './course-breakdown.component';

describe('CourseBreakdownComponent', () => {
  let component: CourseBreakdownComponent;
  let fixture: ComponentFixture<CourseBreakdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseBreakdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
