import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeCurrentlyOnLeaveComponent } from './office-currently-on-leave.component';

describe('OfficeCurrentlyOnLeaveComponent', () => {
  let component: OfficeCurrentlyOnLeaveComponent;
  let fixture: ComponentFixture<OfficeCurrentlyOnLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeCurrentlyOnLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeCurrentlyOnLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
