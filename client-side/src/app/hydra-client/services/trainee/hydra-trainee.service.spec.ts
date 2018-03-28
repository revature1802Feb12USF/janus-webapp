import { TestBed, inject, async } from '@angular/core/testing';

import { HydraTraineeService } from './hydra-trainee.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HydraTrainee } from '../../entities/HydraTrainee';
import { UrlService } from '../urls/url.service';

fdescribe('HydraTraineeService', () => {
  const trainee = new HydraTrainee();
  trainee.traineeId = 104;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HydraTraineeService, UrlService],
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
          service.findAllByBatchAndStatus(1, 'Dropped').subscribe();

          backend.expectOne({
            url: `http://localhost:8080/trainees/batch/1/status/Dropped`,
            method: 'GET'
          });
        })
    )
  );

  it(`should create a new trainee`,
    async(
      inject([HttpClient, HttpTestingController, HydraTraineeService],
        (http: HttpClient, backend: HttpTestingController, service: HydraTraineeService) => {
          service.create(trainee).subscribe();

          backend.expectOne({
            url: `http://localhost:8080/trainees`,
            method: 'POST'
          });
        })
    )
  );

  it(`should update a trainee`,
    async(
      inject([HttpClient, HttpTestingController, HydraTraineeService],
        (http: HttpClient, backend: HttpTestingController, service: HydraTraineeService) => {
          service.update(trainee).subscribe();

          backend.expectOne({
            url: `http://localhost:8080/trainees`,
            method: 'PUT'
          });
        })
    )
  );

  it(`should delete a trainee`,
    async(
      inject([HttpClient, HttpTestingController, HydraTraineeService],
        (http: HttpClient, backend: HttpTestingController, service: HydraTraineeService) => {
          service.delete(104).subscribe();

          backend.expectOne({
            url: `http://localhost:8080/trainees/104`,
            method: 'DELETE'
          });
        })
    )
  );
});
