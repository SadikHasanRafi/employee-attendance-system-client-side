import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeAllLeaveRequestsComponent } from './office-all-leave-requests.component';

describe('OfficeAllLeaveRequestsComponent', () => {
  let component: OfficeAllLeaveRequestsComponent;
  let fixture: ComponentFixture<OfficeAllLeaveRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeAllLeaveRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeAllLeaveRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
