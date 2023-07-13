import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEmployeeRegistrationRequestComponent } from './company-employee-registration-request.component';

describe('CompanyEmployeeRegistrationRequestComponent', () => {
  let component: CompanyEmployeeRegistrationRequestComponent;
  let fixture: ComponentFixture<CompanyEmployeeRegistrationRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyEmployeeRegistrationRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyEmployeeRegistrationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
