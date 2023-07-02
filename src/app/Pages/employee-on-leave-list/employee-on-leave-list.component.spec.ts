import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOnLeaveListComponent } from './employee-on-leave-list.component';

describe('EmployeeOnLeaveListComponent', () => {
  let component: EmployeeOnLeaveListComponent;
  let fixture: ComponentFixture<EmployeeOnLeaveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeOnLeaveListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeOnLeaveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
