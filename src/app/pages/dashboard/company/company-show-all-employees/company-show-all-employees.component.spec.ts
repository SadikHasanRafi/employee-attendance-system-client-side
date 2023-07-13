import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyShowAllEmployeesComponent } from './company-show-all-employees.component';

describe('CompanyShowAllEmployeesComponent', () => {
  let component: CompanyShowAllEmployeesComponent;
  let fixture: ComponentFixture<CompanyShowAllEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyShowAllEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyShowAllEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
