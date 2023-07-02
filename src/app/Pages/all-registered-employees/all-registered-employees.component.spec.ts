import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRegisteredEmployeesComponent } from './all-registered-employees.component';

describe('AllRegisteredEmployeesComponent', () => {
  let component: AllRegisteredEmployeesComponent;
  let fixture: ComponentFixture<AllRegisteredEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRegisteredEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllRegisteredEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
