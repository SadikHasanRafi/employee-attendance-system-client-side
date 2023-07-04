import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOfficeInformationComponent } from './update-office-information.component';

describe('UpdateOfficeInformationComponent', () => {
  let component: UpdateOfficeInformationComponent;
  let fixture: ComponentFixture<UpdateOfficeInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOfficeInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateOfficeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
