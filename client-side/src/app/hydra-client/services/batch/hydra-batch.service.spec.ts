import { TestBed, inject, async } from '@angular/core/testing';

import { HydraBatchService } from './hydra-batch.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { HydraBatch } from '../../entities/HydraBatch';
import { UrlService } from '../urls/url.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

fdescribe('HydraBatchService', () => {
  const batch = new HydraBatch();
  batch.batchId = 100;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlService, HydraBatchService],
      imports: [HttpClientModule,
        HttpClientTestingModule]
    });
  });

  it('batch should be created', inject([HydraBatchService], (service: HydraBatchService) => {
    expect(service).toBeTruthy();
  }));

  it(`should get all batches`,
    async(
      inject([HttpClient, HttpTestingController, HydraBatchService],
        (http: HttpClient, backend: HttpTestingController, service: HydraBatchService) => {
          service.fetchAll().subscribe();

          backend.expectOne({
            url: `http://localhost:8080/batches`,
            method: 'GET'
          });
        })
    )
  );

  // it(`should create a new trainee`,
  //   async(
  //     inject([HttpClient, HttpTestingController, HydraTraineeService],
  //       (http: HttpClient, backend: HttpTestingController, service: HydraTraineeService) => {
  //         service.create(trainee).subscribe();

  //         backend.expectOne({
  //           url: `http://localhost:8080/trainees`,
  //           method: 'POST'
  //         });
  //       })
  //   )
  // );

  // it(`should update a trainee`,
  //   async(
  //     inject([HttpClient, HttpTestingController, HydraTraineeService],
  //       (http: HttpClient, backend: HttpTestingController, service: HydraTraineeService) => {
  //         service.update(trainee).subscribe();

  //         backend.expectOne({
  //           url: `http://localhost:8080/trainees`,
  //           method: 'PUT'
  //         });
  //       })
  //   )
  // );

  // it(`should delete a trainee`,
  //   async(
  //     inject([HttpClient, HttpTestingController, HydraTraineeService],
  //       (http: HttpClient, backend: HttpTestingController, service: HydraTraineeService) => {
  //         service.delete(104).subscribe();

  //         backend.expectOne({
  //           url: `http://localhost:8080/trainees/104`,
  //           method: 'DELETE'
  //         });
  //       })
  //   )
  // );
});
