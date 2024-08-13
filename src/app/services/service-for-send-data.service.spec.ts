import { TestBed } from '@angular/core/testing';

import { ServiceForSendDataService } from './service-for-send-data.service';

describe('ServiceForSendDataService', () => {
  let service: ServiceForSendDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceForSendDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
