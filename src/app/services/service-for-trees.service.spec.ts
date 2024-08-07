import { TestBed } from '@angular/core/testing';

import { ServiceForTreesService } from './service-for-trees.service';

describe('ServiceForTreesService', () => {
  let service: ServiceForTreesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceForTreesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
