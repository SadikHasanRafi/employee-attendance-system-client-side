import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUpdateMyProfileComponent } from './employee-update-my-profile.component';

describe('EmployeeUpdateMyProfileComponent', () => {
  let component: EmployeeUpdateMyProfileComponent;
  let fixture: ComponentFixture<EmployeeUpdateMyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeUpdateMyProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeUpdateMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
