import { TestBed } from '@angular/core/testing';

import { GetAllRegistrationRequestService } from './get-all-registration-request.service';

describe('GetAllRegistrationRequestService', () => {
  let service: GetAllRegistrationRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllRegistrationRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
