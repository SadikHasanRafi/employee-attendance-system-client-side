import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeApplyLeaveComponent } from './employee-apply-leave.component';

describe('EmployeeApplyLeaveComponent', () => {
  let component: EmployeeApplyLeaveComponent;
  let fixture: ComponentFixture<EmployeeApplyLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeApplyLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeApplyLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
