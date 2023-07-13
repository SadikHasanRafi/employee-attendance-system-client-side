import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUpdateProfileComponent } from './employee-update-profile.component';

describe('EmployeeUpdateProfileComponent', () => {
  let component: EmployeeUpdateProfileComponent;
  let fixture: ComponentFixture<EmployeeUpdateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeUpdateProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
