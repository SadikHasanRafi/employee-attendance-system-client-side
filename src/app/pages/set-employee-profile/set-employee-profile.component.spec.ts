import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetEmployeeProfileComponent } from './set-employee-profile.component';

describe('SetEmployeeProfileComponent', () => {
  let component: SetEmployeeProfileComponent;
  let fixture: ComponentFixture<SetEmployeeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetEmployeeProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetEmployeeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
