import { TestBed, inject } from '@angular/core/testing';

import { HydraUrlService } from './hydra-url.service';

describe('HydraUrlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HydraUrlService]
    });
  });

  it('should be created', inject([HydraUrlService], (service: HydraUrlService) => {
    expect(service).toBeTruthy();
  }));
});
