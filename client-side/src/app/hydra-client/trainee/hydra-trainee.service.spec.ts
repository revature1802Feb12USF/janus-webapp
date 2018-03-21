import { TestBed, inject } from '@angular/core/testing';

import { HydraTraineeService } from './hydra-trainee.service';

describe('HydraTraineeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HydraTraineeService]
    });
  });

  it('should be created', inject([HydraTraineeService], (service: HydraTraineeService) => {
    expect(service).toBeTruthy();
  }));
});
