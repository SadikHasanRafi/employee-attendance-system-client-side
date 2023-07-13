import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAllLeaveRequestComponent } from './company-all-leave-request.component';

describe('CompanyAllLeaveRequestComponent', () => {
  let component: CompanyAllLeaveRequestComponent;
  let fixture: ComponentFixture<CompanyAllLeaveRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyAllLeaveRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyAllLeaveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
