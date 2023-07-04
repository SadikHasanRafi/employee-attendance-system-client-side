import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeShowEmployeeDetailsComponent } from './office-show-employee-details.component';

describe('OfficeShowEmployeeDetailsComponent', () => {
  let component: OfficeShowEmployeeDetailsComponent;
  let fixture: ComponentFixture<OfficeShowEmployeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeShowEmployeeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeShowEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
