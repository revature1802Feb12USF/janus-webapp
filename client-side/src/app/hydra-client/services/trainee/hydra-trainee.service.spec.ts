import { TestBed, inject, async } from '@angular/core/testing';

import { HydraTraineeService } from './hydra-trainee.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HydraTrainee } from '../../entities/HydraTrainee';

describe('HydraTraineeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HydraTraineeService],
      imports: [HttpClientModule,
        HttpClientTestingModule]
    });
  });

  it('should be created', inject([HydraTraineeService], (service: HydraTraineeService) => {
    expect(service).toBeTruthy();
  }));

  it(`should create a new trainee`,
    async(
      inject([HttpClient, HttpTestingController, HydraTraineeService],
        (http: HttpClient, backend: HttpTestingController, service: HydraTraineeService) => {
          service.create(new HydraTrainee);

          backend.expectOne({
            url: `${this.context}trainees`,
            method: 'POST'
          });
        })
    )
  );
});
