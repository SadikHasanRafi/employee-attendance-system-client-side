import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompnayInformationComponent } from './update-compnay-information.component';

describe('UpdateCompnayInformationComponent', () => {
  let component: UpdateCompnayInformationComponent;
  let fixture: ComponentFixture<UpdateCompnayInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCompnayInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCompnayInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
