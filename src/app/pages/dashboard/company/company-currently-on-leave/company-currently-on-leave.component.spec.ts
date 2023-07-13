import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCurrentlyOnLeaveComponent } from './company-currently-on-leave.component';

describe('CompanyCurrentlyOnLeaveComponent', () => {
  let component: CompanyCurrentlyOnLeaveComponent;
  let fixture: ComponentFixture<CompanyCurrentlyOnLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyCurrentlyOnLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyCurrentlyOnLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
