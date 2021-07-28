import { TestBed } from '@angular/core/testing';

import { ProvinciasServicesService } from './provincias-services.service';

describe('ProvinciasServicesService', () => {
  let service: ProvinciasServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvinciasServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
