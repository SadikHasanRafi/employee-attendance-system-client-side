import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeGiveAttendanceComponent } from './employee-give-attendance.component';

describe('EmployeeGiveAttendanceComponent', () => {
  let component: EmployeeGiveAttendanceComponent;
  let fixture: ComponentFixture<EmployeeGiveAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeGiveAttendanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeGiveAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
