import { TestBed, inject, async } from '@angular/core/testing';

import { HydraTraineeService } from './hydra-trainee.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HydraTrainee } from '../../entities/HydraTrainee';
import { UrlService } from '../urls/url.service';

fdescribe('HydraTraineeService', () => {
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

  it(`should get all trainees with batch id 1`,
    async(
      inject([HttpClient, HttpTestingController, HydraTraineeService],
        (http: HttpClient, backend: HttpTestingController, service: HydraTraineeService) => {
          service.fetchAllByBatch(1).subscribe();

          backend.expectOne({
            url: `http://localhost:8908/trainees/batch/1`,
            method: 'GET'
          });
        })
    )
  );

  it(`should create a new trainee`,
    async(
      inject([HttpClient, HttpTestingController, HydraTraineeService],
        (http: HttpClient, backend: HttpTestingController, service: HydraTraineeService) => {
          service.create(new HydraTrainee).subscribe();

          backend.expectOne({
            url: `http://localhost:8908/trainees/batch/1`,
            method: 'POST'
          });
        })
    )
  );
});
