import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRegistrationRequestComponent } from './employee-registration-request.component';

describe('EmployeeRegistrationRequestComponent', () => {
  let component: EmployeeRegistrationRequestComponent;
  let fixture: ComponentFixture<EmployeeRegistrationRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeRegistrationRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeRegistrationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
