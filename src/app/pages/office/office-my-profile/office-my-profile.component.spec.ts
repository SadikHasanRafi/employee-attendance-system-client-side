import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeMyProfileComponent } from './office-my-profile.component';

describe('OfficeMyProfileComponent', () => {
  let component: OfficeMyProfileComponent;
  let fixture: ComponentFixture<OfficeMyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeMyProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
