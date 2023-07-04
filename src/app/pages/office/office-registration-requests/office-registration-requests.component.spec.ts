import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeRegistrationRequestsComponent } from './office-registration-requests.component';

describe('OfficeRegistrationRequestsComponent', () => {
  let component: OfficeRegistrationRequestsComponent;
  let fixture: ComponentFixture<OfficeRegistrationRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeRegistrationRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeRegistrationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
