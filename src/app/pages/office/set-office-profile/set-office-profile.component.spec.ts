import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOfficeProfileComponent } from './set-office-profile.component';

describe('SetOfficeProfileComponent', () => {
  let component: SetOfficeProfileComponent;
  let fixture: ComponentFixture<SetOfficeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetOfficeProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetOfficeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
