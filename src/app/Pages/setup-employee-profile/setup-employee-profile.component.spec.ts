import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupEmployeeProfileComponent } from './setup-employee-profile.component';

describe('SetupEmployeeProfileComponent', () => {
  let component: SetupEmployeeProfileComponent;
  let fixture: ComponentFixture<SetupEmployeeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupEmployeeProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupEmployeeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
