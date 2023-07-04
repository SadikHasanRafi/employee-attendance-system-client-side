import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeApplicationStatusComponent } from './employee-application-status.component';

describe('EmployeeApplicationStatusComponent', () => {
  let component: EmployeeApplicationStatusComponent;
  let fixture: ComponentFixture<EmployeeApplicationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeApplicationStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeApplicationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
