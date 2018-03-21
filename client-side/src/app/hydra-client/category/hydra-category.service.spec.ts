import { TestBed, inject } from '@angular/core/testing';

import { HydraCategoryService } from './hydra-category.service';

describe('HydraCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HydraCategoryService]
    });
  });

  it('should be created', inject([HydraCategoryService], (service: HydraCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
