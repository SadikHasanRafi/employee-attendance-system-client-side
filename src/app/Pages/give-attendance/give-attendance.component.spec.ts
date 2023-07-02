import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveAttendanceComponent } from './give-attendance.component';

describe('GiveAttendanceComponent', () => {
  let component: GiveAttendanceComponent;
  let fixture: ComponentFixture<GiveAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveAttendanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiveAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
