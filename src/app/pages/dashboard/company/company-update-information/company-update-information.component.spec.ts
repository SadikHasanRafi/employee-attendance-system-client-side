import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyUpdateInformationComponent } from './company-update-information.component';

describe('CompanyUpdateInformationComponent', () => {
  let component: CompanyUpdateInformationComponent;
  let fixture: ComponentFixture<CompanyUpdateInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyUpdateInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyUpdateInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
